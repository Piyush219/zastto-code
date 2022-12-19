import styles from "./firstPage.module.css"
import Header from "./header/header";
import Body from "./body/body";
// import backgroundImage from "./../../../src/assests/pexels-caio-56759.jpg"
import { Route, Routes } from "react-router-dom";
import ContactUs from "../headerLinkPages/ContactUsPage/contactUsPage";
import AboutUS from "../headerLinkPages/AboutUsPage/aboutUsPage";
import ZasttoCommunity from "../headerLinkPages/ZasttoCommunityPage/zasttoCommunity";

function FirstPage () {

    return ( 
        <div className={styles.firstPageContainer}>
            {/* <img className={styles.imageCustomClass} src={backgroundImage} alt="img"/> */}
            <div style={{ width:"100%", minHeight:"100vh"}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Body/>} />
                    <Route path="/contact" element={<ContactUs/>} />
                    <Route path="/about" element={<AboutUS/>} />
                    <Route path="/community" element={<ZasttoCommunity/>} />
                </Routes>
                {/* <Body/> */}
            </div>
        </div>
     );
}

export default FirstPage ;