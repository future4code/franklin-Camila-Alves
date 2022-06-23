import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ListTrips from './pages/ListTrips';
import Login from './pages/Login';
import AdminHome from './pages/AdminHome';
import CreateTrip from './pages/CreateTrip';
import ApplicationForm from './pages/ApplicationForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="listaDeViagens" element = {<ListTrips />} />
        <Route path="login" element = {<Login />} />
        <Route path="adminHome" element = {<AdminHome />} />
        <Route path="createTrip" element = {<CreateTrip />} />
        <Route path="appForm" element = {<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;