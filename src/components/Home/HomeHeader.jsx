import { Link } from 'react-router-dom';

import "../../scss/main.scss"


function HomeHeader() {

    return (
        <header className="header">
            <Link className='login header-link' to="/logowanie">Zaloguj</Link>
            <Link className='register header-link' to="/register">Załóż konto</Link>
        </header>
    );
}

export default HomeHeader;