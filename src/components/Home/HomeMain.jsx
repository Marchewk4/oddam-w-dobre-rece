import { Link } from 'react-router-dom';

import Decoration from "../../assets/Decoration.svg";
import "../../scss/main.scss"

function HomeMain() {

    return (
        <section className="main-section">
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={Decoration} alt="decoration" />
            <div className='main-buttons'>
                <Link className='main-button' to="/logowanie">ODDAJ<br/>RZECZY</Link>
                <Link className='main-button' to="/logowanie">ZORGANIZUJ<br/>ZBIÓRKĘ</Link>
            </div>
        </section>
    );
}

export default HomeMain;