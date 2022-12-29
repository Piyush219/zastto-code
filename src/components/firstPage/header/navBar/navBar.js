import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import styles from "./navBar.module.css";

function NavBar() {

    const navigate = useNavigate()

    // const redirectToCommunityPage = () => {
    //     navigate("/community")
    // }

    const redirectToAboutPage = () => {
        navigate("/about")
    }

    const redirectToContactPage = () => {
        navigate("/contact")
    }

    const homePageZastto = () => {
        navigate("/")
    }

    return ( 
        <Navbar className={styles.navBarCustomClass} expand="lg" bg="" variant="dark" fixed="top">
            <Container>
                <div style={{marginRight:"55%"}}>
                    <Navbar.Brand><strong className="text-white" style={{cursor:"pointer"}} onClick={homePageZastto}>Zastto</strong></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.customNavbarIconClass}>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="me-auto">
                   <div className={`${styles.navBarOtherPages} me-4`} >
                        {/* <span className="text-white" style={{width:"130px"}} onClick={redirectToCommunityPage}>Zastto Community</span> */}
                        <span className="text-white" onClick={homePageZastto}>Home</span>
                        <span className="text-white" onClick={redirectToAboutPage}>About</span>
                        <span className="text-white" onClick={redirectToContactPage}>Contact Us</span>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}

export default NavBar;