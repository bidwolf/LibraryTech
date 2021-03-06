import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:slug" element={<MainPage />} />
            <Route path="*"element={<NotFound />} />
        </Routes>

    );
}

export default Router;