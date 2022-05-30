import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';

function NewUser() {

    const [state, setState] = useState({
        name: '',
        type: '',
        working_days: '',
        working_hours: '',
        is_open: 'true'
    });

    const navigate = useNavigate();

    function onSubmit(gym) {
        console.log(state);
        gym.preventDefault();

        api.post('/admin/gym/', state)
        .then(() => navigate("/admin", {replace: true}))
        .catch(error => console.log(error));
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' title='name' type="text" onChange={
                event => setState({...state, name: event.target.value})} />
            <label htmlFor='type'>Type</label>
            <input id='type' title='type' type="text" onChange={
                event => setState({...state, type: event.target.value})}/>
            <label htmlFor='working_days'>Working Days</label>
            <input id='working_days' title='working_days' type="text" onChange={
                event => setState({...state, working_days: event.target.value})
            }/>
            <label htmlFor='working_hours'>Working Hours</label>
            <input id='working_hours' title='working_hours' working_hours="text" onChange={event => setState({...state, working_hours: event.target.value})}/>
            <button type='submit'>Create</button>
        </form>
    )
};

export default NewUser;