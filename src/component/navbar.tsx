import { Router, useRouter } from "next/router";
import { use, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from "next/link";

export default function Navbar() {

    useEffect(() => {
        document !== undefined ? require('bootstrap/dist/js/bootstrap.min.js') : null;
    }, [Router.events])

    const router = useRouter();

    // TODO: change all links to <Link> component after i set up the routes
    return (
        <nav className="navbar navbar-dark bg-dark fixed-left" >
            <div className="d-flex flex-column align-items-center justify-content-start">

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">


                    <div className="offcanvas-header">
                        {/* <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Аква-Инг</h5> */}
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>


                    <div className="offcanvas-body d-flex flex-column justify-content-between">
                        <div>
                            <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">ПРОЕКТИ</a> */}
                                    <Link href="/" className={router.pathname === '/' ? 'nav-link active' : 'nav-link'}>ПРОЕКТИ</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">КОНТАКТ</a> */}
                                    <Link href="/kontakt" className={router.pathname === '/kontakt' ? 'nav-link active' : 'nav-link'}>КОНТАКТ</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ЗА НАС
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li>
                                            {/* <a className="dropdown-item" href="#">ИНФОРМАЦИИ ЗА ФИРМАТА</a> */}
                                            <Link href="/zanas" className={router.pathname === '/zanas' ? 'dropdown-item active' : 'dropdown-item'}>ИНФОРМАЦИИ ЗА ФИРМАТА</Link>
                                        </li>
                                        <li><a className="dropdown-item" href="#">ДЕЈНОСТ</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">СЕРТИФИКАТИ</a></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="пребарај овде..." aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">ПРЕБАРУВАЈ</button>
                            </form> */}
                        </div>
                        <div className="d-flex flex-row justify-content-center logos-navbar" >
                            <img src="/logo-white.svg" alt="logo" className="img-fluid" />
                            <img src="/AI-logo_white.svg" alt="logo" className="img-fluid" />
                            <svg href="/logo-white.svg" className="img-fluid" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16"/>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}