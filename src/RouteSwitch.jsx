import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import NavBar from "./components/NavBar";

function RouteSwitch() {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RouteSwitch;
