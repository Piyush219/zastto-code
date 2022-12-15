import BusinessForm from "./forBusinessForm/businessForm";
import SellerForm from "./forSellersForm/forSellersForm";
import styles from "./firstPage.module.css"

function FirstPage () {
    return ( 
        <div className={styles.firstPageContainer}>
            <BusinessForm/>
            <SellerForm/>
        </div>
     );
}

export default FirstPage ;