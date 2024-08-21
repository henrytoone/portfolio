import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./Layout.tsx";


const App = () => {
    return 	(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App