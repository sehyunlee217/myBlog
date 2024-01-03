import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="flex flex-col justify-between align-middle h-full pt-4 font-main bg-white">
            <Header />
            <div className="h-full overflow-auto ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;