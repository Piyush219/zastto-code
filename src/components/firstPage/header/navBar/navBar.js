import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import styles from "./navBar.module.css";

function NavBar() {

    const navigate = useNavigate()

    const redirectToCommunityPage = () => {
        navigate("/community")
    }

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
        <Navbar expand="lg" bg="transparent" variant="dark" fixed="top">
            <Container>
                <div style={{marginRight:"65%"}}>
                    <Navbar.Brand><strong className="text-white" style={{cursor:"pointer"}} onClick={homePageZastto}>Zastto</strong></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.customNavbarIconClass}>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="me-auto">
                   <div className={`${styles.navBarOtherPages} me-4`} >
                        <span className="text-white" style={{width:"130px"}} onClick={redirectToCommunityPage}>Zastto Community</span>
                        <span className="text-white" onClick={redirectToAboutPage}>About</span>
                        <span className="text-white" onClick={redirectToContactPage}>Contact</span>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}

export default NavBar;