import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <div className="max-w-7xl mx-auto ">
            <Header />
            <main className="mt-24">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
