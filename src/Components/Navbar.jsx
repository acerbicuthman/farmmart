import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import invoiceLogo from "../Images/invoice_logo.png";
import Button from "react-bootstrap/Button";
import { BsCartPlus } from "react-icons/bs";
import "../Styles/Navbar.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import HowitWorks from "../Pages/HowitWorks";
import About from "../Pages/About";
import Faq from "../Pages/Faq";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";


function NavBar() {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <div>
            <Link to="/">
              <img className="imglogo" src={invoiceLogo} alt="Invoice Logo" />
            </Link>
          </div>

          <NavDropdown title="WHY FARMBOX" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/AboutUs"> ABOUT US</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/howitworks/*">
              HOW IT WORKS
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              FARMERS AND PRODUCERS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/Faq">
              FAQS
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">PRODUCE BOXES</Nav.Link>
              <Nav.Link href="#link">BUTCHER BOX</Nav.Link>
              <Nav.Link href="#home">GROCERIES</Nav.Link>
              <Nav.Link href="#link">WHERE WE DELIVER</Nav.Link>
            </Nav>
            <div className="mx-3">
              <Nav.Link as={Link} to="/login">
                LOG IN
              </Nav.Link>
            </div>

            <div className="mx-5">
              <Link to="/SignUp">
                <Button variant="outline-success">SiGN UP</Button>
              </Link>
            </div>

            <div>
              <BsCartPlus className="icon" size={50} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-4">
        <Routes>
          <Route path="/">
            {/* <Route index element={<GFGHome />} /> */}
            <Route path="/Faq" element={<Faq />} />
            <Route path="/howitworks/*" element={<HowitWorks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/AboutUs" element={<About/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default NavBar;
