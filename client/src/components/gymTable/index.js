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
        value = { IS_ACTIVE: 'false' };
      } else if (value === 'false') {
        value = { IS_ACTIVE: 'true' };
      } else {
        value = { IS_ACTIVE: 'false' };
      }
      api.put('/admin/gym/' + id, value)
      .then(window.location.reload(false))
      .catch(error => console.log(error))
    }

    return (
        <section className="control-panel">
          <h1>Gyms</h1>
          {gyms.map(sub => sub.map((gym) => {
                return (
                  <div class="div-container">
                    <div class="simple-card">
                      <div>
                        <div class="card-header">
                          <strong>{gym.NAME}</strong>
                          <p>{gym.WORKING_DAYS} / {gym.WORKING_HOURS}</p>
                        </div>
                      </div>
                      <br />
                      <div class="card-center">
                        <p>{gym.CITY} - {gym.STATE}</p>
                        <p>{gym.STREET}, {gym.NUMBER}</p>
                      </div>
                      <br />
                      <div class="card-footer">
                        <div class="card-footer-right">
                          <p>Active: {gym.IS_ACTIVE}</p>
                        </div>
                        <div class="card-footer-buttons">
                          <button class="bt-change" onClick={() => changeStatus(gym.IS_ACTIVE, gym.ID)}>Change</button>
                          <button class="bt-delete" onClick={() => deleteUser(gym.ID)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }))}
            {/* <table>
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
                      <td key={gym.ID}>{gym.IS_ACTIVE} <button onClick={() => changeStatus(gym.IS_ACTIVE, gym.ID)}>Change</button></td>
                      <td><button onClick={() => deleteUser(gym.ID)}>DELETE</button></td>
                    </tr>
                  </tbody>
                )
              }))}
            </table> */}
        </section>
    )
};

export default GymTable;