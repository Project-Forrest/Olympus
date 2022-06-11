
// SCHEMAS

/**
 * @swagger
 * components:
 *   schemas:
 *     Gym:
 *       type: object
 *       required:
 *          name
 *          type
 *          working_days
 *          working_hours
 *          is_active
 *          state
 *          city
 *          district
 *          street
 *          number
 *          postal_code
 *       properties:
 *          id:
 *              type: text
 *              description: O ID da academia que é gerado automaticamente
 *          name:
 *              type: text
 *              description: O nome da academia
 *          type:
 *              type: text
 *              description: O tipo da academia
 *          working_days:
 *              type: text
 *              description: Que dias da semana a academia esta aberta
 *          working_hours:
 *              type: text
 *              description: Qual o horário em que a academia fica aberta
 *          is_active:
 *              type: text
 *              description: Se a academia está ou não ativa no sistema
 *          state:
 *              type: text
 *              description: Estado onde fica a academia
 *          city:
 *              type: text
 *              description: Cidade onde fica a academia
 *          district:
 *              type: text
 *              description: Município da academia
 *          street:
 *              type: text
 *              description: Rua da academia
 *          number:
 *              type: text
 *              description: Número da academia
 *          postal_code:
 *              type: text
 *              description: CEP da academia
 *          reference_point:
 *              type: text
 *              description: Ponto de referência da academia
 *          access_level:
 *              type: integer
 *              description: Nível de acesso necessário para usar a academia
 *          access_level_type:
 *              type: text
 *              description: Tipo de acesso necessário para usar a academia
 *       example:
 *          name: Poseidon Academy
 *          type: Godly
 *          working_days: Seg à Sex
 *          working_hours: 09:00 à 20:00
 *          is_active: true
 *          state: PE
 *          city: recife
 *          district: boa viagem
 *          street: Avenida conselheiro aguiar
 *          number: 69
 *          postal_code: 258936
 *          reference_point: null
 *          access_level: 7
 *          access_level_type: Poseidon
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *          email
 *          password
 *       properties:
 *          id:
 *              type: text
 *              description: O ID do usuário que é gerado automaticamente
 *          username:
 *              type: text
 *              description: O username do usuário
 *          email:
 *              type: text
 *              description: O email de cadastro do usuário
 *          password:
 *              type: text
 *              description: A senha de cadastro do usuário
 *          full_name:
 *              type: text
 *              description: O nome completo do usuário
 *          cpf:
 *              type: text
 *              description: O cpf para usuários brasileiros
 *          sex:
 *              type: text
 *              description: O sexo do usuário
 *          birthdate:
 *              type: text
 *              description: Data de nascimento
 *          is_active:
 *              type: text
 *              description: Se a academia está ou não ativo no sistema
 *          creation_date:
 *              type: text
 *              description: Data de crição do usuário no sistema
 *          payment_status:
 *              type: text
 *              description: Status de pagamento do usuário em ralação ao plano de assinatura
 *          role:
 *              type: text
 *              description: O papel do usuário no sistema
 *          access_level:
 *              type: text
 *              description: Nível de acesso necessário para usar a academia
 *          access_level_type:
 *              type: integer
 *              description: Tipo de acesso necessário para usar a academia
 *       example:
 *          id: 122bdec4-5dcb-48b4-ab2c-07e8d5f23573
 *          username: Flavinho do pneu
 *          email: flavinhodopneu@gmail.com
 *          password: senha123
 *          full_name: Flavio Andrade Pneu
 *          cpf: 094.391.950-96
 *          sex: M
 *          birthdate: 31/12/1999
 *          is_active: true
 *          creation_date: 11/06/2022
 *          payment_status: ok
 *          role: ADMIN
 *          access_level: 7
 *          access_level_type: ADMIN
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Day_Code:
 *       type: object
 *       required:
 *          gym_id
 *       properties:
 *          id:
 *              type: text
 *              description: O ID aqui é gerado pelo usuário para utilizar uma academia
 *          is_valid:
 *              type: text
 *              description: Contém a validade do código que expira 1 dia após a criação
 *          expiration_date:
 *              type: text
 *              description: Contém a data de expiração do código
 *          gym_id:
 *              type: text
 *              description: O id da academia para o qual o código foi gerado
 *          user_id:
 *              type: text
 *              description: O id do usuário que gerou o código
 *       example:
 *          is_valid: true
 *          expiration_date: 11/06/2022
 *          gym_id: 122bdec4-5dcb-48b4-ab2c-07e4c5f23573
 *          user_id: 122bdec4-5dcb-48b4-ab2c-07e8d5f23573
*/

// TAGS

/**
 * @swagger
 * tags:
 *   name: Gyms
 *   description: The gym management Routes
*/

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The user management Routes
*/

/**
 * @swagger
 * tags:
 *   name: Day Code
 *   description: The day code management Routes
*/

// PATHS

/**
 * @swagger
 * /admin/gym:
 *   get:
 *     summary: Retorna uma lista de todas as academias
 *     tags: [Gyms]
 *     responses:
 *       200:
 *         description: A lista de academias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gym'
 *       404:
 *         description: No Gym Found
*/

/**
 * @swagger
 * /admin/gym:
 *   post:
 *     summary: Adiciona uma academia ao banco de dados
 *     tags: [Gyms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gym'
 *     responses:
 *       201:
 *         description: Academia criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       500:
 *         description: Something went wrong
*/

/**
 * @swagger
 * /admin/gym/{id}:
 *   get:
 *     summary: Retorna uma única academia pelo id
 *     tags: [Gyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O id da academia
 *     responses:
 *       200:
 *         description: Os dados da academia pelo id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       404:
 *         description: Gym Not Found
 */

/**
 * @swagger
 * /admin/gym/{id}:
 *   patch:
 *     summary: Atualiza uma academia ao banco de dados pelo id
 *     tags: [Gyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O id da academia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gym'
 *     responses:
 *       200:
 *         description: Academia atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       500:
 *         description: Something went wrong
*/

/**
 * @swagger
 * /admin/gym/{id}:
 *   put:
 *     summary: Atualiza uma academia ao banco de dados pelo id
 *     tags: [Gyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O id da academia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gym'
 *     responses:
 *       200:
 *         description: Academia atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       500:
 *         description: Something went wrong
*/

/**
 * @swagger
 * /admin/gym/{id}:
 *   delete:
 *     summary: Deleta uma única academia pelo id
 *     tags: [Gyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O id da academia
 *     responses:
 *       200:
 *         description: Academia removida
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       500:
 *         description: Something went wrong
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Retorna um único usuário pelo id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O id do usuário
 *     responses:
 *       200:
 *         description: Os dados do usuário pelo id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: User not Found
 */

/**
 * @swagger
 * /daycode/{id}:
 *   get:
 *     summary: Retorna um único day code pelo id
 *     tags: [Day Code]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O id do day code
 *     responses:
 *       200:
 *         description: Os dados do day code pelo id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Day_Code'
 *       404:
 *         description: Day Code not Found
 */

/**
 * @swagger
 * /daycode:
 *   post:
 *     summary: Adiciona um day code ao banco de dados
 *     tags: [Day Code]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Day_Code'
 *     responses:
 *       201:
 *         description: Day code criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Day_Code'
 *       500:
 *         description: Something went wrong
*/