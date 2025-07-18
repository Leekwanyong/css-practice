import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="mt-24 max-w-7xl mx-auto flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
