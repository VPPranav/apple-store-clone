import React, { useState, useEffect } from 'react';
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";

const NavOptions = ({ 
    iPhones, 
    iPads, 
    Macs, 
    AppleWatch, 
    AirPods, 
    Accessories 
}) => {
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/#iphones") {
            setActiveCategory('iphones');
        } else if (path === "/#ipads") {
            setActiveCategory('ipads');
        } else if (path === "/#macs") {
            setActiveCategory('macs');
        } else if (path === "/#applewatch") {
            setActiveCategory('applewatch');
        } else if (path === "/#airpods") {
            setActiveCategory('airpods');
        } else if (path === "/#accessories") {
            setActiveCategory('accessories');
        }
    }, []);

    const renderProducts = (products) => {
        return products.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ));
    };

    return (
        <div className="navOptions">
            {activeCategory === 'iphones' && renderProducts(iPhones)}
            {activeCategory === 'ipads' && renderProducts(iPads)}
            {activeCategory === 'macs' && renderProducts(Macs)}
            {activeCategory === 'applewatch' && renderProducts(AppleWatch)}
            {activeCategory === 'airpods' && renderProducts(AirPods)}
            {activeCategory === 'accessories' && renderProducts(Accessories)}
        </div>
    );
};

export default NavOptions;