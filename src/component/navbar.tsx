import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Container, NavDropdown } from "react-bootstrap";



export default function AkvaingNavbar() {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter();



    // TODO: change all links to <Link> component after i set up the routes
    return (
        <>


            <Navbar expand={false} className="flex-column bg-dark fixed-left fixed-top  ">
                <Container fluid className="d-flex flex-column align-items-center justify-content-start">
                <Button  onClick={handleShow} style={{backgroundColor:"transparent", padding:0}} > 
                    <i className="bi bi-list" style={{fontSize:"1.8rem"}}></i>

                </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton closeVariant="white" className="bg-dark">
                        </Offcanvas.Header>
                        <Offcanvas.Body className="d-flex flex-column justify-content-between bg-dark text-bg-dark">
                            
                                <Nav className="flex-grow-1 pe-3" activeKey={router.pathname}>
                                    <Nav.Item>
                                        <Link href="/" onClick={handleClose} className="nav-link">ПРОЕКТИ</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link href="/kontakt" onClick={handleClose} className="nav-link">КОНТАКТ</Link>
                                    </Nav.Item>
                                    <NavDropdown title="ЗА НАС" id="basic-nav-dropdown" className="nav-link" menuVariant="dark">
                                        <NavDropdown.Item >
                                            <Nav.Link href="/zanas" onClick={handleClose} className="nav-link">МИСИЈА</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <Nav.Link href="/zanas" onClick={handleClose} className="nav-link">СЕРТИФИКАТИ</Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <Nav.Link href="/zanas" onClick={handleClose} className="nav-link">ДЕЈНОСТ</Nav.Link>                                        
                                        </NavDropdown.Item>
                                    </NavDropdown>    
                                </Nav>

                            <div className="d-flex flex-row justify-content-center logos-navbar" >
                                <img src="/logo-white.svg" alt="logo" className="img-fluid" />
                                <img src="/AI-logo_white.svg" alt="logo" className="img-fluid" />

                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>




        </>
    )
}