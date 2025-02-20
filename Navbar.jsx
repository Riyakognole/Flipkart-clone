import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Flipkart Clone
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
