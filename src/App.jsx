import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Sidebars from "./Components/Sidebars";
import Settings from "./Pages/Settings";
import LogOut from "./Pages/LogOut";
const App = () => {
  return (
    <BrowserRouter style={{ margin: 0 }}>
      <Routes>
        <Route path="/LogOut" element={<LogOut />} />
      </Routes>
      <Sidebars />
      <Routes>
        <Route path="/Settings" element={<Settings />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
