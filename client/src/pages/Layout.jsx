import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="h-full flex flex-col ">
            <Header />
            <div className="font-rounded text-gray-700 bg-white px-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;