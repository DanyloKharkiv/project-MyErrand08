import { Routes, Route, Navigate } from "react-router-dom";
import Filter from '../Modals/Filters/Filters';
import Modal from '../Modals/Modal';
import { useState } from 'react';
import WelcomePage from '../../page/WelcomePage/WelcomePage';
import AuthPage from '../../page/AuthPage/AuthPage';
import HomePage from '../../page/HomePage/HomePage';
import { PrivateRoute } from "../../route/PrivateRoute";
import { RestrictedRoute } from "../../route/RestrictedRoute";


function App() {

  return (
    <>
      <Routes>
        
        <Route path="/" element={
          <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
        }/>
        <Route path="/welcome" element={
          <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
        }/>
        <Route path="/auth/:id" element={
          <RestrictedRoute redirectTo="/" component={<AuthPage />} />
        }/>
        <Route path="*" element={<HomePage />} />

      </Routes>
    </>
  );
}

export default App;
