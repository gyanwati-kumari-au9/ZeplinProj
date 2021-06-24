import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';


const Header = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style={{backgroundColor:"#419BF9",color:"white"}}>
            <Navbar.Brand href="/" style={{color:"#FDBD39", fontWeight:"bold", paddingLeft:"20px"}}>Zeplin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default withRouter(Header)