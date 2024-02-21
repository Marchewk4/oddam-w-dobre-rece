import { Link } from 'react-router-dom';

import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";


import "../../scss/main.scss"

function HomeFourSteps() {

    return (
        <section className="four-steps" name="fourSteps">
            <div className="four-steps__title">
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={Decoration} alt="decoration" />
            </div>

            <div className="four-steps__steps">
                <div className='step'>
                    <img src={Icon1} alt="icon1"/>
                    <span>Wybierz rzeczy</span>
                    <hr/>
                    <span>ubrania, zabawki,<br/>sprzęt i inne</span>
                </div>
                <div className='step'>
                    <img src={Icon2} alt="icon2"/>
                    <span>Spakuj je</span>
                    <hr/>
                    <span>skorzystaj z<br/>worków na śmieci</span>
                </div>
                <div className='step'>
                    <img src={Icon3} alt="icon3"/>
                    <span>Zdecyduj komu<br/>chcesz pomóc</span>
                    <hr/>
                    <span>wybierz zaufane<br/>miejsce</span>
                </div>
                <div className='step'>
                    <img src={Icon4} alt="icon4"/>
                    <span>Zamów kuriera</span>
                    <hr/>
                    <span>kurier przyjedzie<br/>w dogodnym terminie</span>
                </div>
            </div>

            <div className='main-buttons'>
                <Link className='main-button' to='/login'>ODDAJ<br/>RZECZY</Link>
            </div>
        </section>
    );
}

export default HomeFourSteps;