import { Header, FooterLinks, Footer } from "../components";
import { Outlet,useLocation } from "react-router";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header currentPath={location.pathname}/>
      <Outlet />
      <FooterLinks />
      <Footer />
    </>
  );
};
export default Layout;
