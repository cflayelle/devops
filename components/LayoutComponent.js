import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./SidebarComponent";

const LayoutComponent = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                   <Sidenav/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>
                    <FooterComponent />
                </div>
            </div>
        </>
    )
}

export default LayoutComponent