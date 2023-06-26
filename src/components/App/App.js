import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, useEffect, useState } from 'react';
import { PrivateRoute } from "../../route/PrivateRoute";
import { RestrictedRoute } from "../../route/RestrictedRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/authOperation";
import { lazy } from "react";

const WelcomePage = lazy(() => import("../../page/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../page/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../page/HomePage/HomePage"));


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser());
  }, [])
  
  return (
    <>
      <Suspense>
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
      </Suspense>
    </>
  );
}

export default App;
