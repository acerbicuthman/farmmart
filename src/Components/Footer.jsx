import React from "react";
import invoiceLogo from "../Images/invoice_logo.png";
import "../Styles/footer.css";
import { FaFacebookF, FaArrowCircleUp } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-5">
      <nav className="footerbody border-top border-warning border-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img className="footerimglogo img-fluid" src={invoiceLogo} alt="Invoice Logo" />
            </div>
            <div className="col-md-4">
              <h5 className="mt-4">Contact Us</h5>
              <div className="mb-2">
                <a href="tel:+2347000344zx" className="text-secondary">+2347000344zx</a>
              </div>
              <div className="mb-2">
                <a href="mailto:farmactive@gmail.com" className="text-secondary">farmactive@gmail.com</a>
              </div>
              <div className="mb-2">120 Epe-Ijebu road</div>
              <div className="mb-2">Welcome to Lagos, Ogun State</div>
              <div className="mb-2">Nigeria</div>
            </div>
            <div className="col-md-4">
              <h5>INFO</h5>
              <ul className="list-unstyled">
                <li><a className="nav-link" href="#">FAQ</a></li>
                <li><a className="nav-link" href="#">Contact Us</a></li>
                <li><a className="nav-link" href="#">Terms & Conditions</a></li>
                <li><a className="nav-link" href="#">Refund Policy</a></li>
                <li><a className="nav-link" href="#">Buy a gift card!</a></li>
                <li><a className="nav-link" href="#">Cancellation Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="container-fluid">
    <div class="row justify-content-between align-items-center text-center">
        <div class="col-12 col-md-6 footerfinisher">
            FarmBox Delivery © 2024. All Rights Reserved. Powered by: Delivery Biz PRO
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
            <a href="#" class="m-3"><FaFacebookF size={30} /></a>
            <a href="#" class="m-3"><BsInstagram size={30} /></a>
            <a href="#" class="m-3"><BsTwitter size={30} /></a>
        </div>
    </div>
  
</div>
<div class="sticky-md-bottom float-end my-3">
        <a href="#" class=" p-2">
            <FaArrowCircleUp size={30} />
        </a>
    </div>
      </nav>
    </div>
  );
};

export default Footer;
