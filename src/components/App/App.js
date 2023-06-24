import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Filter from "../Modals/Filters/Filters";
import Modal from "../Modals/Modal";
import { useState } from "react";

const WelcomePage = lazy(() => import("../../page/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../page/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../page/HomePage/HomePage"));

function App() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <button type="button" onClick={() => onShowModal()}>
        Modal
      </button>
      {showModal && (
        <Modal onModalClick={onCloseModal}>
          <Filter />
        </Modal>
      )}
    </>
  );
}

export default App;
