import Nav from 'react-bootstrap/Nav';
import invoiceLogo from '../Images/invoice_logo.png';
import '../Styles/footer.css'
import { FaFacebookF, FaArrowCircleUp} from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Nav className='footerbody border-4 border-top border-warning  ' defaultActiveKey="/home" as="ul">
<hr id="separator" />       
      <Nav.Item as="li">
      <div className='mt-4' >
        <img className='footerimglogo'src={invoiceLogo} alt="Invoice Logo" />
      </div>
      </Nav.Item>
      <Nav.Item as="li">
        <a href="tel:+98434383243" className="text-secondary mt-4 d-block mb-3">+2347000344zx</a>
        <a href="mailto:farmactive@gmail.com" className="text-secondary mt-4 d-block mb-3">farmactive@gmail.com</a>
        <div >
            120 Epe-Ijebu road
        </div>
        <div>
            Welcome to Lagos
        </div>
        <div>
            Ogun State
        </div>
      </Nav.Item>
      <Nav.Item as="li">
       
      <div className='Info'>
        <div className='mt-4 mx-3 my-3'><h5>INFO</h5></div>
       <Nav.Link eventKey="link-1">FAQ</Nav.Link>
       <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
       <Nav.Link eventKey="link-1">Terms & Conditions
</Nav.Link>
        <Nav.Link eventKey="link-1">Refund Policy</Nav.Link>
        <Nav.Link eventKey="link-1">Cancellation Policy</Nav.Link>
       </div>
      </Nav.Item>
      
      <Nav.Item as="li">
      
      <div className='mt-4 mx-3 my-3'><h5>DISCOVER</h5></div>
       <Nav.Link eventKey="link-2">Link</Nav.Link>
       <Nav.Link eventKey="link-2">The Farmbox Family</Nav.Link>
       <Nav.Link eventKey="link-2">Why Farmbox</Nav.Link>
       <Nav.Link eventKey="link-2">How It Works</Nav.Link>
       <Nav.Link eventKey="link-2">Buy a gift card!</Nav.Link>
       <Nav.Link eventKey="link-2">Blog</Nav.Link>  
       <Nav.Link eventKey="link-2">Recipes</Nav.Link>       
      </Nav.Item>
     <br />
     <Nav.Item as="li">
      
      <div className='mt-4 mx-3 my-3'><h5>ACCOUNT</h5></div>
       <Nav.Link eventKey="link-2">Sign In</Nav.Link>
       <Nav.Link eventKey="link-2">View Order</Nav.Link>
            
      </Nav.Item>
    <br />
    <div className='footerfinisher'>
        
    FarmBox Delivery © 2024. All Rights Reserved. Powered by: Delivery Biz PRO - Online Home & Commercial Delivery Software Solutions
    </div>
    
    <div className='socialIcon'>
    
    <FaFacebookF size={30} className='m-3'/>
    <BsTwitter size={30} className='m-3'/> 
    <BsInstagram size={30} className='m-3'/>
    

    </div>
    <div className='sticky-bottom'><a className='backtoTop' href="#"><FaArrowCircleUp size={50}/></a></div>

     </Nav>
    
  );
}

export default Footer;