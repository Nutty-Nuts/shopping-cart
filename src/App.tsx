import Router from "./Router";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <Router />
            </BrowserRouter>
        </div>
    );
}
