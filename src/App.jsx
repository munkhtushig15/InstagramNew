import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Sidebars from "./Components/Sidebars";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout";
import Create from "./Pages/Create";
const App = () => {
  return (
    <BrowserRouter style={{ margin: 0 }}>
      <Sidebars />
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
