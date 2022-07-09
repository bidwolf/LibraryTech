import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:slug"element={<MainPage/>}/>
        </Routes>

    );
}

export default Router;