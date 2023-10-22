import Router from "./Router";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Router />
            </BrowserRouter>
        </div>
    );
}
