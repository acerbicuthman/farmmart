import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import InvoiceLogo from "../Images/invoice_logo.png";
import "../Styles/navbar.css"; // Ensure the above CSS is in this file
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Groceries from "../Pages/Groceries";
import HowitWorks from "../Pages/Howitworks";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Producebox from "../Pages/Producebox";
import Butcherbox from "../Pages/Butcherbox";
import Search from '../Images/search_icon.svg'
import { BsCartPlus } from "react-icons/bs";
import App from "../App";

const Navbar = () => {
  return (
    <>
      <div>
        <header className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <Link className="nav-brand p-0 me-0 me-lg-2" to="/">
                <img className="imglogo" src={InvoiceLogo} alt="Invoice Logo" />
              </Link>


              <button
  className="navbar-toggler m-3"
  type="button"
  // data-bs-toggle="collapse" 
  // data-bs-target="#navbarTogglerDemo01"  // Toggling the navbar collapse
  // aria-controls="navbarTogglerDemo01"
  aria-expanded="false"
  aria-label="Toggle navigation"
  data-bs-toggle="offcanvas"           // Adding functionality to open the offcanvas
  data-bs-target="#offcanvasWithBothOptions" // Targeting the offcanvas
  aria-controls="offcanvasWithBothOptions"
>
  <span className="navbar-toggler-icon"></span>
</button>





<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> */}
  <ul className="navbar-nav me-auto mt-3 mb-2 mb-lg-0">
    <li className="nav-item dropdown">
      <button
        className="btn btn-body-color bg-light dropdown-toggle w-100 w-lg-auto"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        WHY FARMBOX
      </button>
      <ul className="dropdown-menu dropdown-menu-lg-end w-100">
        <li className="dropdowndetail">
          <Link className="dropdowndetail" as={Link} to="/AboutUs">
            ABOUT US
          </Link>
        </li>
        <li className="dropdowndetail">
          <Link className="dropdowndetail" as={Link} to="/howitworks/*">
            HOW IT WORKS
          </Link>
        </li>
        <li className="dropdowndetail">
          <Link className="dropdowndetail" as={Link} to="/Faq">
            FAQ
          </Link>
        </li>
        <li className="dropdowndetail">
          <Link className="dropdowndetail" as={Link} to="/Faq">
            FARMERS AND PRODUCERS
          </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/ProduceBox">
        PRODUCE BOX
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/ButcherBox">
        BUTCHER BOX
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/Groceries">
        GROCERIES
      </a>
    </li>
    <li>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        WHERE WE DELIVER
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                Do we deliver to you?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Please enter your zip code to check if we deliver to your area.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Already have an account? Sign in
              </button>
              <button type="button" className="btn btn-primary">
                Browse Market
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li className="nav-item SearchBtn">
      <img src={Search} alt="Search" />
    </li>
  </ul>

  <div className="d-flex">
    <a className="btn" as={Link} href="/login">
      LOG IN
    </a>
    <a className="SignUpBtn" as={Link} href="/SignUp">
      SIGN UP
    </a>
  </div>
  <div>
  <BsCartPlus className="icon" size={50} />
</div>
</div>

</div>
  </div>
{/* </div> */}







             

             

          </nav>
        </header>

        <div className="container mt-4">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/AboutUs" element={<About />} />
              <Route path="/howitworks/*" element={<HowitWorks />} />
              <Route path="/login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ProduceBox" element={<Producebox />} />
              <Route path="/Groceries" element={<Groceries />} />
              <Route path="/ButcherBox" element={<Butcherbox />} />
              <Route path="/app" element={<App />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navbar;
