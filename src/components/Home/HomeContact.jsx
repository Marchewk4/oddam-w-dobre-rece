import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase.js";

import Decoration from "../../assets/Decoration.svg";
import BackgroundImage from "../../assets/Background-Contact-Form.jpg";

import "../../scss/main.scss";
import * as url from "url";

function HomeContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        const validationErrors = {};

        if (name.split(" ").length !== 1) {
            validationErrors.name = "Imię powinno być jednym wyrazem.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            validationErrors.email = "Niepoprawny format adresu e-mail.";
        }

        if (message.length < 120) {
            validationErrors.message = "Wiadomość powinna mieć minimum 120 znaków.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {
            const docRef = await addDoc(collection(firestore, "messages"), {
                name: name,
                email: email,
                message: message,
            });

            console.log("Document written with ID: ", docRef.id);

            setMessageSent(true);

            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error adding document: ", error);

            setMessageSent(false);
        }
    };

    return (
        <section
            className="contact-form"
            name="contact"
            style={{
                background: `no-repeat top url(${BackgroundImage})`,
                backgroundSize: "cover",
            }}
        >
            <form onSubmit={handleSubmit}>
                <h2>Skontaktuj się z nami</h2>
                <img src={Decoration} alt="decoration" />
                {messageSent && (
                    <div className="success-message">Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy!</div>
                )}
                <div className="contact-form__first">
                    <div className="singleField">
                        <label>Wpisz swoje imię</label>
                        <input
                            type="text"
                            placeholder="Imię"
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className="singleField">
                        <label>Wpisz swój email</label>
                        <input
                            type="text"
                            placeholder="e-mail@xyz.com"
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                </div>
                <div className="contact-form__second">
                    <label>Wpisz swoją wiadomość</label>
                    <textarea
                        rows="5"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <p className="error-message">{errors.message}</p>}
                </div>
                <div className="submit">
                    <button type="submit">Wyślij</button>
                </div>
            </form>
        </section>
    );
}

export default HomeContact;
