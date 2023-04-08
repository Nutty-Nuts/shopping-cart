import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import NavBar from "./components/NavBar";

function RouteSwitch() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState({});

    const handleClick = (e) => {
        setCount(count + 1);
        console.log(0);
    };

    return (
        <div>
            <NavBar cart={"Cart " + count} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/shop"
                        element={<ShopPage click={handleClick} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RouteSwitch;
