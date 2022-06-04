import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../services/api';

function NewUser() {

    const [state, setState] = useState({
        name: '',
        type: '',
        working_days: '',
        working_hours: '',
        is_active: 'false',
        state: '',
        city: '',
        district: '',
        street: '',
        number: '',
        postal_code: '',
        reference_point: '',
        access_level: 0,
        access_level_type: ''
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
        <form className="newuser-form" onSubmit={onSubmit}>
            <h1>Gym</h1>
            <section className="newuser-form-sec1">
                <h2>Basic Info</h2>
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
            </section>
            <br/>
            <section className="newuser-form-sec2">
                <h2>Address</h2>
                <label htmlFor='name'>State</label>
                <input id='state' title='state' type="text" onChange={
                    event => setState({...state, state: event.target.value})} />
                <label htmlFor='name'>City</label>
                <input id='city' title='city' type="text" onChange={
                    event => setState({...state, city: event.target.value})} />
                <label htmlFor='name'>District</label>
                <input id='district' title='district' type="text" onChange={
                    event => setState({...state, district: event.target.value})} />
                <label htmlFor='name'>Street</label>
                <input id='street' title='street' type="text" onChange={
                    event => setState({...state, street: event.target.value})} />
                <label htmlFor='name'>Number</label>
                <input id='address_number' title='address_number' type="text" onChange={
                    event => setState({...state, number: event.target.value})} />
                <label htmlFor='name'>Postal Code</label>
                <input id='postal_code' title='postal_code' type="text" onChange={
                    event => setState({...state, postal_code: event.target.value})} />
                <label htmlFor='name'>Reference Point</label>
                <input id='reference_point' title='reference_point' type="text" onChange={
                    event => setState({...state, reference_point: event.target.value})} />
                <label htmlFor='name'>Access Level</label>
                <input id='access_level' title='access_level' type="number" min="1" max="7" onChange={
                    event => setState({...state, access_level: event.target.value})} />
                <label htmlFor='name'>Access Level Type</label>
                <input id='access_level_type' title='access_level_type' type="text" onChange={
                    event => setState({...state, access_level_type: event.target.value})} />
            </section>
            <button className="create-bt" type='submit'>Create</button>
        </form>
    )
};

export default NewUser;