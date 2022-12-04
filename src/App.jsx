import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Sidebars from "./Components/Sidebars";

const App = () => {
  return (
    <BrowserRouter style={{ margin: 0 }}>
      <Sidebars />
      <Routes>
        <Route path="/:id" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
