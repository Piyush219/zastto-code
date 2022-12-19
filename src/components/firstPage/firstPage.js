import styles from "./firstPage.module.css"
import Header from "./header/header";
import Body from "./body/body";
import backgroundImage from "./../../../src/assests/pexels-caio-56759.jpg"

function FirstPage () {

    return ( 
        <div className={styles.firstPageContainer}>
            {/* <img className={styles.imageCustomClass} src={backgroundImage} alt="img"/> */}
            <div style={{ width:"100%", minHeight:"100vh"}}>
                <Header/>
                <Body/>
            </div>
        </div>
     );
}

export default FirstPage ;