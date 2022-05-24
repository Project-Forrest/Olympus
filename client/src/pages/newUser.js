import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';

function NewUser() {

    const initialValues = {
        name: '',
        type: '',
        working_days: '',
        working_hours: '',
        is_open: true,
    }

    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    function onChange(fields) {
        const {field, value} = fields.target;

        setValues({ ...values, [field]: value});
    }

    function onSubmit(gym) {
        gym.preventDefault();

        api.post('/admin/gym/', values)
        .then((response) => navigate.push('/'))
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' title='name' type="text" value={initialValues.name} onChange={onChange} />
            <label htmlFor='type'>Type</label>
            <input id='type' title='type' type="text" value={initialValues.type} onChange={onChange}/>
            <label htmlFor='working_days'>Working Days</label>
            <input id='working_days' title='working_days' type="text" value={initialValues.working_days} onChange={onChange}/>
            <label htmlFor='working_hours'>Working Hours</label>
            <input id='working_hours' title='working_hours' working_hours="text" value={initialValues.working_hours} onChange={onChange}/>
            {/* <label htmlFor='is_open'>Is Open</label>
            <input id='is_open' title='is_open' type="checkbox" onChange={onChange}/> */}
            <button type='submit'>Create</button>
        </form>
    )
};

export default NewUser;