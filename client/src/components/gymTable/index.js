import { useEffect, useState } from 'react';
import api from '../../services/api';

const GymTable = () => {

    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        api.get('/admin/gym/')
        .then(response => setGyms(Object.values(response.data)))
        .catch((error) => console.log(error))
    }, []);

    async function deleteUser(id) {
      await api.delete('/admin/gym/' + id);
      window.location.reload(false);
    }

    function changeStatus(value, id) {
      if (value === 'true') {
        value = { IS_OPEN: 'false' };
      } else if (value === 'false') {
        value = { IS_OPEN: 'true' };
      } else {
        value = { IS_OPEN: 'false' };
      }
      api.put('/admin/gym/' + id, value)
      .then(window.location.reload(false))
      .catch(error => console.log(error))
    }

    return (
        <section className="control-panel">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Working Days</th>
                  <th>Is Active</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {gyms.map(sub => sub.map((gym) => {
                return (
                  <tbody>
                    <tr>
                      <td key={gym.ID}>{gym.NAME}</td>
                      <td key={gym.ID}>{gym.TYPE}</td>
                      <td key={gym.ID}>{gym.WORKING_DAYS}</td>
                      <td key={gym.ID}>{gym.IS_OPEN} <button onClick={() => changeStatus(gym.IS_OPEN, gym.ID)}>Change</button></td>
                      <td><button onClick={() => deleteUser(gym.ID)}>DELETE</button></td>
                    </tr>
                  </tbody>
                )
              }))}
            </table>
        </section>
    )
};

export default GymTable;