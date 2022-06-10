const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res, next) => {

    try {
        const users = req.body.users.map(user => [
            user.email,
            bcrypt.hashSync(user.password, 10)
        ])

        query = 'INSERT INTO users (email, password) VALUES ?';
        const results = await sqlite3.execute(query, [ users ]);

        const response = {
            message: 'Usuário criado com sucesso',
            createdUsers: req.body.users.map(user => { return { email: user.email } })
        }
        return res.status(201).send(response);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.Login = async (req, res, next) => {

    try {
        const query = `SELECT * FROM users WHERE email = ?`;
        var results = await sqlite3.execute(query, [req.body.email]);

        if (results.length < 1) {
            return res.status(401).send({ message: 'Falha na autenticação' })
        }

        if (await bcrypt.compareSync(req.body.password, results[0].password)) {
            const token = jwt.sign({
                userId: results[0].userId,
                email: results[0].email
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            });
            return res.status(200).send({
                message: 'Autenticado com sucesso',
                token: token
            });
        }
        return res.status(401).send({ message: 'Falha na autenticação' })

    } catch (error) {
        return res.status(500).send({ message: 'Falha na autenticação' });
    }
};

 exports.getusers = async (req, res, next) => {
    try {
        query = 'select * from users';
        const results = await sqlite3.execute(query );

        const response = {
            createdUsers: req.body.users.map(user => { return { email: results.email } })
        }
        return res.status(200).send(response);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
};
