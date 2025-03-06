import React from 'react';
import "../styles/PreFooter.css";
import "../styles/Footer.css";

const Footer = ({ footer }) => {
    return (
        <>
            <div className="PreFooter">
                <div>
                    <p><b>Apple Trade In</b><br />Turn an eligible device into credit.</p>
                </div>
                <div>
                    <p><b>Fast, Free Delivery</b><br />Or pick up available items at an Apple Store.</p>
                </div>
                <div>
                    <p><b>Get Help Buying</b><br />Call 1-800-MY-APPLE or chat online.</p>
                </div>
            </div>

            <div className="footer">
                <div>
                    <p>SHOP AND LEARN</p>
                    {footer.shopAndLearn.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>SERVICES</p>
                    {footer.services.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>APPLE STORE</p>
                    {footer.appleStore.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>ABOUT APPLE</p>
                    {footer.aboutApple.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
            </div>
            
            <div className="footerBorder">
                <div>Copyright © This Website is a Clone Project Made by Pranav V P{new Date().getFullYear()} Apple Inc. All rights reserved.</div>
            </div>
        </>
    );
};

export default Footer;
