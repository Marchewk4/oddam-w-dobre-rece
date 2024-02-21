import Signature from "../../assets/Signature.svg";
import Decoration from "../../assets/Decoration.svg";
import AboutImage from "../../assets/People.jpg";
import "../../scss/main.scss"

function HomeAbout() {

    return (
        <section className='about' name="about">
            <div className='left-side-container'>
                <h2>O nas</h2>
                <img src={Decoration} alt="decoration"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img src={Signature} alt="signature" className="signature"/>
            </div>
            <div className='right-side-container'>
                <img src={AboutImage} alt="people"/>
            </div>
        </section>
    );
}

export default HomeAbout;