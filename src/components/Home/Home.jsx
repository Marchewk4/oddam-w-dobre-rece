import "../../scss/main.scss"

import HomeNav from "./HomeNav.jsx";
import HomeAbout from "./HomeAbout.jsx";
import HomeHeader from "./HomeHeader.jsx";
import HomeOrganizations from "./HomeOrganizations.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeFourSteps from "./HomeFourSteps.jsx";
import HomeContact from "./HomeContact.jsx";
import HomeFooter from "./HomeFooter.jsx";

function Home() {

    return (
        <>
            <HomeNav />
            <HomeHeader />
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