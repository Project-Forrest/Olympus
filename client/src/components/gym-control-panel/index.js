import React, {Component, useEffect, useState} from 'react';
import api from '../../services/api';

class GymTable extends Component {

    state = {
        gyms: [],
    };
    
    async allGyms() {
        const response = await api.get('/');

        this.setState({ gyms: response.data});
    };

    render() {

        const { gyms } = this.state;

        return(
            <section className="control-panel">
                {console.log(gyms)}
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>CEP</th>
                    </tr>
                </table>
            </section>
        );
    };
};

export default GymTable;