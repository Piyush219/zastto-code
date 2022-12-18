import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./navBar.module.css";

function NavBar() {
    return ( 
        <Navbar expand="lg" bg="transparent" variant="light">
            <Container>
                <div style={{marginRight:"65%"}}>
                    <Navbar.Brand><strong className="text-white">Zastto</strong></Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.customNavbarIconClass}>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="me-auto">
                   <div className={`${styles.navBarOtherPages} me-4`} >
                        <span className="text-white" style={{width:"130px"}}>Zastto Community</span>
                        <span className="text-white" >About</span>
                        <span className="text-white" >Contact</span>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className={`${styles.navBarMainContainer} pt-4`}>
        //     <div>
        //         <h3 className="ms-3"><strong>Zastto</strong></h3>
        //     </div>

            // <div className={`${styles.navBarOtherPages} me-4`} >
            //     <span>Zastto Community</span>
            //     <span className="" >About</span>
            //     <span className="" >Contact</span>
            // </div>

        // </div>
     );
}

export default NavBar;