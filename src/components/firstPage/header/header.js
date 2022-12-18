import NavBar from "./navBar/navBar";
import styles from "./header.module.css"
function Header() {
    return ( 
        <div className={styles.headerMainContainer}>
            <NavBar/>
        </div>
            
     );
}

export default Header;