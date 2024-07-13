import Home from "./pages/Home.jsx";
import Segunda from "./pages/Segunda.jsx";
import Tercera from "./pages/Tercera.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <NavBar />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/segunda" element={<Segunda />} />
                <Route path="/tercera" element={<Tercera />} />
            </Routes>
      </div>
    )
}

export default App