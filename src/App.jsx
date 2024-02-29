import {
    HashRouter,
    Route,
    Routes,
} from 'react-router-dom';

import Home from "./components/Home/Home.jsx";
import LogIn from "./components/LogRegister/LogIn.jsx";
import LogOut from "./components/LogRegister/LogOut.jsx";
import Register from "./components/LogRegister/Register.jsx";
import Form from "./components/Form/Form.jsx";

import './scss/main.scss'

function App() {

  return (
       <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logowanie" element={<LogIn />} />
                <Route path="/rejestracja" element={<Register />} />
                <Route path="/wylogowano" element={<LogOut />} />
                <Route path="/oddaj-rzeczy" element={<Form />} />
            </Routes>
       </HashRouter>
  );
}

export default App
