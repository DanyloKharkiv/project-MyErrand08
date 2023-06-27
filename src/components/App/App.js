import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, useEffect, useState } from 'react';
import { PrivateRoute } from "../../route/PrivateRoute";
import { RestrictedRoute } from "../../route/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, refreshUser } from "../../redux/auth/authOperation";
import { lazy } from "react";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/authSelector";

const WelcomePage = lazy(() => import("../../page/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../page/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../page/HomePage/HomePage"));


function App() {
  const dispatch = useDispatch()

  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(currentUser());
  }, [])
  
  return (
      !isRefreshing && !isLoading &&  (
    <>
      <Suspense>
      <Routes>
        <Route path="/home" element={
          <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
        }/>
        <Route path="/welcome" element={
          <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
        }/>
        <Route path="/auth/:id" element={
          <RestrictedRoute redirectTo="/" component={<AuthPage />} />
        }/>
        <Route path="*" element={
          <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
        }/>

      </Routes>
      </Suspense>
    </>
      )
  );
}

export default App;
