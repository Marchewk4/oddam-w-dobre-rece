import FormNav from "./FormNav.jsx";
import FormHeader from "./FormHeader.jsx";
import FormMain from "./FormMain.jsx";
import FormImportant from "./FormImportant.jsx";
import HomeContact from "../Home/HomeContact.jsx";
import HomeFooter from "../Home/HomeFooter.jsx";
import FormImage from "../../assets/Form-Hero-Image.jpg";
import "../../scss/main.scss"

function Form() {

    return (
        <>
            <div className="form-start" name="formStart">
                <div className="left-side">
                    {/*<img src={FormImage} alt="form-image" className="form-image"/>*/}
                </div>
                <div className="right-side container">
                    <div className="header-nav-container">
                        <FormHeader />
                        <FormNav />
                    </div>
                    <FormMain />
                </div>
            </div>
            <FormImportant />
            <HomeContact />
            <HomeFooter />
        </>
    )
}

export default Form;