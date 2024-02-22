import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import "../../scss/main.scss";

function HomeFooter() {

    return (
        <footer className="footer">
            <div/>
            <div className="copyright">
                <p>Copyright by Coders Lab</p>
            </div>
            <div className='icons'>
                <a href="#"><img src={Facebook} alt="facebook-icon"/></a>
                <a href="#"><img src={Instagram} alt="instagram-icon"/></a>
            </div>
        </footer>
    );
}

export default HomeFooter;