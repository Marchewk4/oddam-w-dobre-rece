

import HomeNav from "./HomeNav.jsx";
import HomeAbout from "./HomeAbout.jsx";
import HomeHeader from "./HomeHeader.jsx";
import HomeOrganizations from "./HomeOrganizations.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeFourSteps from "./HomeFourSteps.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";

import "../../scss/main.scss"


function Home() {

    return (
        <div className="home" name="home">
            <HomeHeader />
            <HomeNav />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAbout />
            <HomeOrganizations />
            <HomeContact />
            <HomeFooter />
        </div>
    );
}

export default Home;