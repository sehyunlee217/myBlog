import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex font-rounded flex-col items-center h-full pt-4 text-gray-700 bg-white">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;