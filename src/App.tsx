import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
