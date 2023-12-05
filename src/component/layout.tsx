import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import AkvaingNavbar from "./navbar";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <AkvaingNavbar/>
            {children}
        </>
    )
}
export default Layout;