// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InvoiceLogo from "../Images/invoice_logo.png";
import "../Styles/navbar.css"; 
import Search from '../Images/search_icon.svg';
import OffCanvas from './OffCanvas'; // Import the OffCanvas component
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modals') ) {
      closeModal();
    }
  };

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
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <OffCanvas
                openModal={openModal}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
                handleOutsideClick={handleOutsideClick}
              />
            </div>
          </nav>
    
        </header>
      </div>
    </>
  );
};

export default Navbar;
