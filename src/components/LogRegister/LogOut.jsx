import { Link } from 'react-router-dom';

import HomeHeader from "../Home/HomeHeader.jsx";
import HomeNav from "../Home/HomeNav.jsx";
import Decoration from "../../assets/Decoration.svg";

import "../../scss/main.scss";

function LogOut() {

    return (
        <>
            <div className='log__header container'>
                <HomeHeader />
                <HomeNav />
            </div>
            <div className='logout'>
                <h2>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                <img src={Decoration} alt="decoration" />
                <Link to="/" className="logout-btn">Strona Główna</Link>
            </div>
        </>    )
}

export default LogOut;