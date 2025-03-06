import React from 'react';
import "../styles/PreFooter.css";
import "../styles/Footer.css";

const Footer = ({ footer }) => {
    return (
        <>
            <div className="PreFooter">
                <div>
                    <p><b>Fast & Free Delivery</b><br />Get free delivery on all orders from Apple Store</p>
                </div>
                <div>
                    <p><b>Secure Payments</b><br />Apple Pay, Credit Cards, and more</p>
                </div>
                <div>
                    <p><b>Apple Support</b><br />Get help from Apple experts</p>
                </div>
            </div>

            <div className="PreFooter2">
                <div>
                    <p>STAY CONNECTED</p>
                    <span>Get the latest Apple news and special offers</span>
                </div>

                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter Email Address" />
                        <button>›</button>
                    </div>
                    <span>You're subscribed for Apple updates.</span>
                </div>

                <div>
                    <p>FOLLOW US</p>
                    <span>Stay updated on social media</span>
                </div>

                <div>
                    <a href="https://facebook.com/apple">Facebook</a>
                    <a href="https://youtube.com/apple">YouTube</a>
                    <a href="https://instagram.com/apple">Instagram</a>
                    <a href="https://twitter.com/apple">Twitter</a>
                </div>
            </div>

            <div className="footer">
                <div>
                    <p>SUPPORT</p>
                    {footer.support.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>SHOP AND LEARN</p>
                    {footer.shopAndLearn.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                
                <div>
                    <p>APPLE STORE</p>
                    {footer.retailStore.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>ABOUT APPLE</p>
                    {footer.aboutUS.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>CONTACT US</p>
                    {footer.contactUs.map((item) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <div>Chat with Apple Support</div><button>CHAT NOW</button>
                </div>
            </div>

            <div className="footerBorder">
                <div>Copyright © Apple Inc. This Website is a Clone of Apple Store Website Created By Pranav V P All Rights Reserved</div>
            </div>
        </>
    );
};

export default Footer;