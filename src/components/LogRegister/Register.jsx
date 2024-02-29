import { useState } from "react";
import { Link } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase.js";
import { useNavigate } from 'react-router-dom';

import HomeHeader from "../Home/HomeHeader.jsx";
import HomeNav from "../Home/HomeNav.jsx";
import Decoration from "../../assets/Decoration.svg";

import "../../scss/main.scss";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({});
    const [register, setRegister] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        const validationErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            validationErrors.email = "Podany e-mail jest nieprawidłowy";
        }

        if (password.length < 6) {
            validationErrors.password = "Podane hasło jest za krótkie!";
        }

        if (password2 !== password) {
            validationErrors.password2 = "Oba hasła różnią się!";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            const docRef = await addDoc(collection(firestore, "register"), {
                email: email,
                password: password,
            });

            console.log("Register written with ID: ", docRef.id);

            setRegister(true);

            navigate("/oddaj-rzeczy");

            localStorage.setItem('loggedInUser', JSON.stringify({ email }));

            setEmail("");
            setPassword("");
            setPassword2("");
        } catch (error) {
            console.error("Error adding NewUser: ", error);

            setRegister(false);
        }
    };

    return (
        <>
            <div className='log__header container'>
                <HomeHeader />
                <HomeNav />
            </div>
            <div className='register'>
                <h2>Załóż konto</h2>
                <img src={Decoration} alt="decoration" />
                <form onSubmit={handleSubmit}>
                    <div className='form-fields'>
                        <div className='single-field'>
                            <label>Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className='single-field'>
                            <label>Hasło</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>
                        <div className='single-field'>
                            <label>Powtórz hasło</label>
                            <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                            {errors.password2 && <p className="error-message">{errors.password2}</p>}
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <Link to="/logowanie">Zaloguj się</Link>
                        <button type="submit">Załóż konto</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;