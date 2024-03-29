import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <main className="p-20 bg-[#f3f4f6]">{children}</main>
        <Footer />
        </>
    );
};

export default Layout;