import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ListTrips from '../pages/ListTrips/ListTrips';
import Login from '../pages/Login/Login';
import AdminHome from '../pages/AdminHome/AdminHome';
import CreateTrip from '../pages/CreateTrip/CreateTrip';
import ApplicationForm from '../pages/ApplicationForm/ApplicationForm';

const Router = () => {
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
  
  export default Router;