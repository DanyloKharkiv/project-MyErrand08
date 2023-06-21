
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Autorization from "../page/Autorization";
import Registration from "../page/Registration";
import Login from "../page/Login";




function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
