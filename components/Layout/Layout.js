import Navbar from "../Shared/Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            <main className="p-20 bg-[#f3f4f6]">{children}</main>
        </>
    );
};

export default Layout;