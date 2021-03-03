import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NaviBar () {
    return (
    <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Barashek</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/"></Link></Nav.Link>
                            <Nav.Link><Link to="/snacks">Snacks</Link></Nav.Link>
                            <Nav.Link><Link to="/salads">Salads</Link></Nav.Link>
                            <Nav.Link><Link to="/soups">Soups</Link></Nav.Link>
                            <Nav.Link><Link to="/steaks">Steaks</Link></Nav.Link>
                            <Nav.Link><Link to="/kebabs">Kebabs</Link></Nav.Link>
                            <Nav.Link><Link to="/desserts">Desserts</Link></Nav.Link>
                            <Nav.Link><Link to="/bar">Bar</Link></Nav.Link>
                            <Nav.Link><Link to="/information">Information</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    )}