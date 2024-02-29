import Decoration from "../../assets/Decoration.svg";
import Squares from "../../assets/Squares.jpg";
function FormMain() {
    return (
        <section className="main-section">
            <h2>Oddaj rzeczy, których już nie chcesz</h2>
            <h2>POTRZEBUJĄCYM!</h2>
            <img src={Decoration} alt="decoration" />
            <h2>Wystarczą 4 proste kroki!</h2>
            <img src={Squares} alt="squares" />


            {/*<div className='squares'>*/}
            {/*    <div className="square">*/}
            {/*        <h2>1</h2>*/}
            {/*        <h3>Wybierz <br/> rzeczy</h3>*/}
            {/*    </div>*/}
            {/*    <div className="square">*/}
            {/*        <h2>2</h2>*/}
            {/*        <h3>Spakuj je w <br/> worki</h3>*/}
            {/*    </div>*/}
            {/*    <div className="square">*/}
            {/*        <h2>3</h2>*/}
            {/*        <h3>Wybierz <br/> fundację</h3>*/}
            {/*    </div>*/}
            {/*    <div className="square">*/}
            {/*        <h2>4</h2>*/}
            {/*        <h3>Zamów <br/> kuriera</h3>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </section>
    );
}

export default FormMain;