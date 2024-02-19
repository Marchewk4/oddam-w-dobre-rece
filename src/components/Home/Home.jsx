

import HomeNav from "./HomeNav.jsx";
import HomeAbout from "./HomeAbout.jsx";
import HomeHeader from "./HomeHeader.jsx";
import HomeMain from "./HomeMain.jsx";
import HomeOrganizations from "./HomeOrganizations.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeFourSteps from "./HomeFourSteps.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";
import HomeImage from "../../assets/Home-Hero-Image.jpg"; // Import the image

import "../../scss/main.scss"


function Home() {

    return (
        <>
            <div className="home-start" name="homeStart">
                <div className="left-side">
                    <img src={HomeImage} alt="home-image" className="home-image"/>

                </div>
                <div className="right-sde container">
                    <div className="header-nav-container">
                        <HomeHeader />
                        <HomeNav />
                    </div>
                    <HomeMain />
                </div>
            </div>
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAbout />
            <HomeOrganizations />
            <HomeContact />
            <HomeFooter />
        </>
    );
}

export default Home;