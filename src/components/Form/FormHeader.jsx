import { Link, animateScroll as scroll} from 'react-scroll'

import '../../scss/main.scss';

function FormHeader() {
    return (
        <header className="header">
            <Link className='give-away header-link' to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            <Link className='logout header-link' to="/wylogowano">Wyloguj</Link>
        </header>
    );
}

export default FormHeader;