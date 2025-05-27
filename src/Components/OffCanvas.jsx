// OffCanvas.js
import React from "react";
import { Link } from "react-router-dom";
import InvoiceLogo from "../Images/invoice_logo.png";
import { BsCartPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "../Styles/offcanvas.css";

const OffCanvas = ({ openModal, closeModal, isModalOpen, handleOutsideClick }) => {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          <img src={InvoiceLogo} style={{ width: "100px" }} alt="Logo" />
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else</a></li>
  </ul>
</div>

        <ul className="navbar-nav me-auto mt-2 mb-2 mb-lg-0">
          {/* <li className="nav-item dropdown">
            <button
              className="btn btn-body-color bg-light dropdown-toggle w-100 w-lg-auto"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              WHY FARMBOX
            </button>
            <ul className="dropdown-menu">
              <li className="dropdowndetail">
                <a className="dropdowndetail" to="/AboutUs"> <Link> ABOUT US</Link></a>
              </li>
              <li className="dropdowndetail">
                <Link className="dropdowndetail" to="/howitworks">HOW IT WORKS</Link>
              </li>
              <li className="dropdowndetail">
                <Link className="dropdowndetail" to="/Faq">FAQ</Link>
              </li>
              <li className="dropdowndetail">
                <Link className="dropdowndetail" to="/Faq">FARMERS AND PRODUCERS</Link>
              </li>
            </ul>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/ProduceBox">PRODUCE BOX</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ButcherBox">BUTCHER BOX</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Groceries">GROCERIES</Link>
          </li>
          <li className="nav-item">
            <div>
              <button className="nav-link" onClick={openModal}> WHERE WE DELIVER</button>
              {isModalOpen && (
                <div
                  className="modal modal-lg show"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ display: 'block', top: '0', right: '0' }}
                  onClick={handleOutsideClick}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Do we deliver to you?</h1>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Please enter your zip code to check if we deliver to your area.
                        <div className="mt-3">
                          <input type="text" placeholder="zipcode" className="modal-input" />
                          <button className="checkBtn">Check</button>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn ">
                          Already have an account? Sign in
                        </button>
                        <button type="button" className="btn ">
                          Browse Market
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>

        <div className=" d-flex w-25 mt-2 sm:w-100 sm:mt-2">
          <Link className="btn" to="/login">LOG IN</Link>
          <Link className="btn" to="/SignUp">SIGN UP</Link>
        </div>
        <div>
          <BsCartPlus className="icon" size={50} />
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
