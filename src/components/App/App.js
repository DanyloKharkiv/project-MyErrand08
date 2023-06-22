
import { lazy } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

const WelcomePage = lazy(() => import('../../page/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../../page/AuthPage/AuthPage'));




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
