import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Container, NavDropdown, ToggleButton } from "react-bootstrap";
import  Intl from "@/i18n/intl";



export default function AkvaingNavbar() {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter();
    const translation = new Intl();

    const [locale, setLocale] = useState("");
    const t  = (key: string) => translation.getTranslation(locale ? locale : 'mk', key);


    const onLocaleChange = (locale: string) => {
        if (typeof window !== "undefined") {
            translation.setLocale(locale);
            setLocale(locale);
            router.push("/" + locale );
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setLocale(translation.readLocale());
        } else {
            setLocale("mk");
        }
    }, []);




    return (
        <>


            <Navbar expand={false} className="flex-column bg-dark fixed-left fixed-top  ">
                <Container fluid className="d-flex flex-column align-items-center justify-content-start">
                    <Button onClick={handleShow} style={{ backgroundColor: "transparent", padding: 0 }} >
                        <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>

                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton closeVariant="white" className="bg-dark">
                        </Offcanvas.Header>
                        <Offcanvas.Body className="d-flex flex-column justify-content-between bg-dark text-bg-dark">

                            <Nav className="flex-grow-1 pe-3" activeKey={router.pathname}>
                                <Nav.Item>
                                    <Link href={"/"+locale} onClick={handleClose} className="nav-link">{t("nav.projects")}</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href={"/"+locale+"/kontakt"} onClick={handleClose} className="nav-link">{t("nav.contact")}</Link>
                                </Nav.Item>
                                <NavDropdown
                                    title={t("nav.about")}
                                    id="basic-nav-dropdown"
                                    className="nav-link"
                                    menuVariant="dark"
                                    style={{ transition: "all ease-in-out 0.3s" }}
                                >
                                    <NavDropdown.Item >
                                        <Nav.Link href={"/" + locale + "/mission"} onClick={handleClose} className="nav-link">{t("nav.mission")}</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Nav.Link href={"/" + locale + "/certificates"} onClick={handleClose} className="nav-link">{t("nav.certificates")}</Nav.Link>
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Item >
                                        <Nav.Link href="/zanas" onClick={handleClose} className="nav-link">ДЕЈНОСТ</Nav.Link>
                                    </NavDropdown.Item> */}
                                </NavDropdown>
                            </Nav>

                            <div className="align-items-center">

                                <div className="d-flex flex-row justify-content-center logos-navbar" >
                                    <img src="/logo-white.svg" alt="logo" className="img-fluid" />
                                    <img src="/AI-logo_white.svg" alt="logo" className="img-fluid" />
                                </div>

                            <ButtonGroup>
                                {["mk", "en"].map((loc) => (
                                    <ToggleButton
                                        key={loc}
                                        id={`radio-${loc}`}
                                        type="radio"
                                        variant="outline-light"
                                        name="radio"
                                        value={loc}
                                        checked={loc === locale}
                                        onChange={(e) => {
                                            onLocaleChange(e.currentTarget.value);
                                        }}
                                    >
                                        {loc}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>




        </>
    )
}