import { Link, animateScroll as scroll} from 'react-scroll'

import "../../scss/main.scss"

function HomeNav() {

    return (
        <nav className="nav">
            <Link
                activeClass='active'
                to="homeStart"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => console.log('Link clicked')}
            >
                Start
            </Link>
            <Link
                activeClass='active'
                to="fourSteps"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => console.log('Link clicked')}
            >
                O co chodzi?
            </Link>
            <Link
                activeClass='active'
                to="about" spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                O nas
            </Link>
            <Link
                activeClass='active'
                  to="organizations"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                Fundacje i organizacje
            </Link>
            <Link
                activeClass='active'
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                Kontakt
            </Link>
        </nav>
    );
}

export default HomeNav;