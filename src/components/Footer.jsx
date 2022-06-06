import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <>
      <div id="fmenu">
        <div class="fcontainer">
          <h2>PRODUCTS</h2>
          <p>Footwear</p>
          <p>Clothing</p>
          <p>Accessories</p>
          <p>Outlet – Sale</p>
          <p>New Arrivals</p>
        </div>
        <div class="fcontainer">
          <h2>SPORTS</h2>
          <p>Running</p>
          <p>Football</p>
          <p>Gym/Training</p>
          <p>Tennis</p>
          <p>Outdoor</p>
          <p>Basketball</p>
          <p>Swimming</p>
        </div>
        <div class="fcontainer">
          <h2>COLLECTIONS</h2>
          <p>Ultraboost</p>
          <p>Superstar</p>
          <p>Predator</p>
          <p>Parley</p>
          <p>adicolor</p>
        </div>
        <div class="fcontainer">
          <h2>SUPPORT</h2>
          <p>Help</p>
          <p>Customer Services</p>
          <p>Returns & Exchanges</p>
          <p>Store Locator</p>
          <p>Bra Fit Guide</p>
          <p>Shipping</p>
          <p>adiclub</p>
          <p>Order Tracker</p>
        </div>

        <div class="fcontainer">
          <h2>COMPANY INFO</h2>
          <p>About Us</p>
          <p>adidas stories</p>
          <p>adidas Apps</p>
          <p>Entity Details</p>
          <p>Press</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="last">
        <h3 className="p">Privacy Policy | Terms and Conditions | Cookies</h3>
        <h3 className="i">India</h3>
      </div>
    </>
  );
};
