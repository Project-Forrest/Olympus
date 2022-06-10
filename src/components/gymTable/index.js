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
                  <div key={gym.ID} className="div-container">
                    <div className="simple-card">
                      <div>
                        <div className="card-header">
                          <strong>{gym.NAME}</strong>
                          <p>{gym.WORKING_DAYS} / {gym.WORKING_HOURS}</p>
                        </div>
                      </div>
                      <br />
                      <div className="card-center">
                        <p>{gym.CITY} - {gym.STATE}</p>
                        <p>{gym.STREET}, {gym.NUMBER}</p>
                      </div>
                      <br />
                      <div className="card-footer">
                        <div className="card-footer-right">
                          <p>Active: {gym.IS_ACTIVE}</p>
                        </div>
                        <div className="card-footer-buttons">
                          <button className="bt-change" onClick={() => changeStatus(gym.IS_ACTIVE, gym.ID)}>Change</button>
                          <button className="bt-delete" onClick={() => deleteUser(gym.ID)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }))}
        </section>
    )
};

export default GymTable;