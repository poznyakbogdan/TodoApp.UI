import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link>
                        <NavLink to="/">Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/lists">Categories</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/tasks">Tasks</NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;