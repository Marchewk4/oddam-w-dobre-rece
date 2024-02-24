import { useState } from "react";
import { Link } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase.js";

import HomeHeader from "../Home/HomeHeader.jsx";
import HomeNav from "../Home/HomeNav.jsx";
import Decoration from "../../assets/Decoration.svg";

import "../../scss/main.scss";

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [logIn, setLogIn] = useState(false);

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

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            const docRef = await addDoc(collection(firestore, "login"), {
                email: email,
                password: password,
            });

            console.log("LogIn written with ID: ", docRef.id);

            setLogIn(true);

            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error adding LogIn: ", error);

            setLogIn(false);
        }
    };

    return (
        <>
            <div className='log__header container'>
                <HomeHeader />
                <HomeNav />
            </div>
            <div className='login'>
                <h2>Zaloguj się</h2>
                <img src={Decoration} alt="decoration" />
                <form onSubmit={handleSubmit}>
                    <div className='form-fields'>
                        <div className='single-field'>
                            <label>Email</label>
                            <input type="text" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className='single-field'>
                            <label>Hasło</label>
                            <input type="password" value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <Link to="/register">Załóż konto</Link>
                        <button type="submit">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LogIn;