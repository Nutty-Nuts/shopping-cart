import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

export default function RouteSwitch() {
    const [list, setList] = useState({});

    function getData(data) {
        let value = data[1];

        if (isNaN(list[data[0]])) value = data[1];
        else value = list[data[0]] + data[1];

        setList((list) => ({
            ...list,
            [data[0]]: value,
        }));
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop submit={getData} />} />
                    <Route path="/cart" element={<Cart data={list} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
