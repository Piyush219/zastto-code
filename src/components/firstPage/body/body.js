import BusinessForm from "./forBusinessForm/businessForm";
import SellerForm from "./forSellersForm/forSellersForm";
import styles from "./body.module.css";
import IntroShortPara from "./introShortPara/introPara";


function Body() {
    return ( 
        <div className={`${styles.bodyMainContainer}`}>
            <div className={`${styles.introParaMainContainer}`}>
                <IntroShortPara/>
            </div>
           
            <div className={`${styles.formMainContainer} mt-4`}>
                <SellerForm/>
                <BusinessForm/>
            </div>
        </div>
     );
}

export default Body;