import React, { useState, useEffect } from 'react';
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";

const NavOptions = ({ iphone, ipad, mac, watch, airpods, tvHome, entertainment, accessories, support }) => {
    const [iphoneToggle, setIphoneToggle] = useState(false);
    const [ipadToggle, setIpadToggle] = useState(false);
    const [macToggle, setMacToggle] = useState(false);
    const [watchToggle, setWatchToggle] = useState(false);
    const [airpodsToggle, setAirpodsToggle] = useState(false);
    const [tvHomeToggle, setTvHomeToggle] = useState(false);
    const [entertainmentToggle, setEntertainmentToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);
    const [supportToggle, setSupportToggle] = useState(false);

    useEffect(() => {
        if (window.location.pathname === "/#iphone") {
            return setIphoneToggle(true);
        }
        if (window.location.pathname === "/#ipad") {
            return setIpadToggle(true);
        }
        if (window.location.pathname === "/#mac") {
            return setMacToggle(true);
        }
        if (window.location.pathname === "/#watch") {
            return setWatchToggle(true);
        }
        if (window.location.pathname === "/#airpods") {
            return setAirpodsToggle(true);
        }
        if (window.location.pathname === "/#tv-home") {
            return setTvHomeToggle(true);
        }
        if (window.location.pathname === "/#entertainment") {
            return setEntertainmentToggle(true);
        }
        if (window.location.pathname === "/#accessories") {
            return setAccessoriesToggle(true);
        }
        if (window.location.pathname === "/#support") {
            return setSupportToggle(true);
        }
    }, []);

    return (
        <div className="navOptions">
            {iphoneToggle ? iphone.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {ipadToggle ? ipad.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {macToggle ? mac.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {watchToggle ? watch.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {airpodsToggle ? airpods.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {tvHomeToggle ? tvHome.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {entertainmentToggle ? entertainment.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {accessoriesToggle ? accessories.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {supportToggle ? support.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
        </div>
    );
};

export default NavOptions;