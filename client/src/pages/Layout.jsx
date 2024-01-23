import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (

        <div className="h-full flex flex-col bg-gradient-to-br bg-slate-50 text-gray-700 dark:bg-bg_dark dark:text-white dark:text-opacity-70 antialiased">
            <Header />
            <div className="font-sans text-lg px-4 h-full pb-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;