import { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import   { RegistrationForm}  from "../AuthForm/RegistrationForm/RegistrationForm";
import   { LoginForm } from "../AuthForm/LoginForm/LoginForm";
import  {RestrictedRoute } from '../AuthForm/RestrictedRoute';



const WelcomePage = lazy(() => import('../../page/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../page/AuthPage/AuthPage'));






function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  components={< RegistrationForm />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  components={<LoginForm />}
                />
              }
            />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
