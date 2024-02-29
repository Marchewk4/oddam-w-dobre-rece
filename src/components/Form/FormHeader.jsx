import { Link } from 'react-router-dom';

import '../../scss/main.scss';

function FormHeader() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const email = loggedInUser ? loggedInUser.email : '';

    return (
        <header className="header">
            <div className="hello">Cześć {email}</div>
            <Link className='give-away header-link' to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            <Link className='logout header-link' to="/wylogowano">Wyloguj</Link>
        </header>
    );
}

export default FormHeader;
