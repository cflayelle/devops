import Footer from "./footer";
import Navbar from "./navbar";
import Sidenav from "./sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                   <Sidenav/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout