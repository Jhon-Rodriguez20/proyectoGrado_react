import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../connections/userActions';
import { Container, Nav } from 'react-bootstrap';

function Navigation() {
    const connected = useSelector((state) => state.connected);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <Container>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        {connected ? (
                            <NavDropdown title={user.sub} id="basic-nav-dropdown">
                                <React.Fragment>
                                    <NavDropdown.Item as={NavLink} to={"/"} className='text-black'>
                                        Resetear contraseña
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </React.Fragment>
                            <NavDropdown.Item onClick={() => dispatch(logout())} className='text-black'>
                                Cerrar sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                        ): ""}
                    </div>
                    <div className="col-4 text-center">
                        <Navbar.Brand as={NavLink} to={"/"} className="blog-header-logo text-dark fs-4">FESC IdeaBank</Navbar.Brand>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <NavLink to={'/'} className="text-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mx-3">
                                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </header>
            <hr/>
            <div className="nav-scroller py-1 mb-2">
                <Nav className="nav d-flex justify-content-between">
                    <NavLink className="link p-2 text-decoration-none">World</NavLink>
                    <NavLink className="link p-2 text-decoration-none">U.S.</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Technology</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Design</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Culture</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Business</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Politics</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Opinion</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Science</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Health</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Style</NavLink>
                    <NavLink className="link p-2 text-decoration-none">Travel</NavLink>
                </Nav>
            </div>
        </Container>
    );
}

export { Navigation }
