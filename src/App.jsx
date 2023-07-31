import "./App.css";
import HomePage from "./components/homepage";
import AboutUs from "./components/About Us";
import { Routes,Route } from "react-router-dom";
import IPAddress from "./components/ip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/aboutUs" element={ <AboutUs />} />
        <Route path="/ip" element={ <IPAddress />} />
      </Routes>
    </>
  );
}

export default App;
