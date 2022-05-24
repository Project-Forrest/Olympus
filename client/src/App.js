import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import api from './services/api';
import NewUser from './pages/newUser';
import GymTable from './components/gymTable/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    api.get('/admin/gym/')
    // .then(response => console.log("the log " + response.data))
    .then(response => setGyms(Object.values(response.data)))
    .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<GymTable />} />
            <Route path="/new-user" element={<NewUser />} />
          </Routes>
        </div>
      </Router>
    </>
  )
};

export default App;
