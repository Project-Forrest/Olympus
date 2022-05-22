import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import api from './services/api';
// import GymTable from './components/gym-control-panel/index';

function App() {

  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    api.get('/admin/gym/')
    // .then(response => console.log("the log " + response.data))
    .then(response => setGyms(Object.values(response.data)))
    .catch((error) => console.log(error))
  }, []);

  return (
    <section>
      <Navbar />
      {console.log(typeof Object.values(gyms))}
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
    </section>
  )
};

export default App;
