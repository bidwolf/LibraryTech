import { Route, Routes } from "react-router-dom";
import Design from "./pages/Design";
import Frontend from "./pages/Frontend";
import MainPage from "./pages/MainPage";
import MaisVendidos from "./pages/MaisVendidos";
import Programacao from "./pages/Programacao";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/design" element={<Design />} />
            <Route path="/front" element={<Frontend />} />
            <Route path="/top-sellers" element={<MaisVendidos />} />
            <Route path="/programation" element={<Programacao />} />
        </Routes>

    );
}

export default Router;