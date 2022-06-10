import './App.css';
import Navbar from './components/navbar/index';
import NewUser from './pages/newUser';
import GymTable from './components/gymTable/index';
import HomePage from './pages/homePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<GymTable />} />
            <Route path="/admin/new-user" element={<NewUser />} />
          </Routes>
        </div>
      </Router>
    </>
  )
};

export default App;