import { Link } from 'react-router-dom';

import "../../scss/main.scss"


function HomeHeader() {

    return (
        <header className="container">
            <Link className='login header-link' to="/login">Zaloguj</Link>
            <Link className='register header-link' to="/register">Załóż konto</Link>
        </header>
    );
}

export default HomeHeader;