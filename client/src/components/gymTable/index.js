import { useEffect, useState } from 'react';
import api from '../../services/api';
import Navbar from '../navbar/index'

function GymTable() {

    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        api.get('/admin/gym/')
        .then(response => setGyms(Object.values(response.data)))
        .catch((error) => console.log(error))
    }, []);
    return (
        <section className="control-panel">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Working Days</th>
                </tr>
              </thead>
              {gyms.map(sub => sub.map((gym, key) => {
                return (
                  <tbody>
                    <tr>
                      <td key={gym.ID}>{gym.NAME}</td>
                      <td key={gym.ID}>{gym.TYPE}</td>
                      <td key={gym.ID}>{gym.WORKING_DAYS}</td>
                    </tr>
                  </tbody>
                )
              }))}
            </table>
        </section>
    )
};

export default GymTable;