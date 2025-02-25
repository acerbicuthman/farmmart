import { useState, useContext } from "react";
import "../Styles/signup.css";
import { Link } from "react-router-dom";
import { ValidateEmail, ValidatePassword, ValidatePhone } from "../library/regexValidate";
import { AuthContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    password1: "",
    password2: "",
    
  });

  const { loading, setLoading, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEdits = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the signup function from context
      const response = await signup(
        form.firstName,
        form.lastName,
        form.address,
        form.email,
        form.phone,
        form.password1,
        form.password2
      );

      if (response) {
        // Reset form fields on successful signup
        setForm({
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          phone: "",
          password1: "",
          password2: "",
          
        });

        navigate("/login");
        alert("Successfully Signed Up");
        // setLoading(false);
      }
    } catch (error) {
      console.error("Signup failed", error);
      // setLoading(false);
    }
    setLoading(false)
  };

  const errorMessage = {
    email: "Email is invalid",
    password1:
      "Password should have a capital letter, small letter, special character, and a number",
    password2: "Passwords do not match",
  };

  const checkForm = () => {
    return (
      form.firstName &&
      form.lastName &&
      form.address &&
      ValidatePhone(form.phone) &&
      ValidateEmail(form.email) &&
      form.password1 === form.password2 &&
      ValidatePassword(form.password1)
      
    );
  };



  
  return (
    <div>
      <h2>Sign Up Now</h2>
      <div className="SignUpPage w-100 mx-auto">
        <h1 className="text-center">REGISTER TO GET STARTED</h1>
        <br />
        <div className="stepper-wrapper">
          <div className="stepper-item completed">
            <div className="step-counter">1</div>
            <div className="step-name">Delivery Details</div>
          </div>
          <div className="stepper-item completed">
            <div className="step-counter">2</div>
            <div className="step-name">Farmboxes</div>
          </div>
          <div className="stepper-item active">
            <div className="step-counter">3</div>
            <div className="step-name">Information</div>
          </div>
          <div className="stepper-item">
            <div className="step-counter">4</div>
            <div className="step-name">Finish Delivery</div>
          </div>
        </div>
        <h2 className="text-center mt-5 mb-5">WELCOME! LET'S GET YOUR ADDRESS.</h2>

        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>First Name</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={form.firstName}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Last Name</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={form.lastName}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Address</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  value={form.address}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="Enter your address"
                />
              </div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Email</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="Enter your email"
                />
                <sub className="errors mt-2 email-error text-danger">
                  {form.email.length === 0 || ValidateEmail(form.email)
                    ? ""
                    : errorMessage.email}
                </sub>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Phone Number</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  value={form.phone}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="Enter your phone number"
                />
                 <sub className="errors mt-2 email-error text-danger">
                  {form.phone.length === 0 || ValidatePhone(form.phone)
                    ? ""
                    : errorMessage.phone}
                </sub>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Password</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password1"
                  value={form.password1}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label>
                  <strong>Confirm Password</strong>
                  <span className="badge bg-light text-danger">*</span>
                </label>
                <input
                  type="password"
                  id="password2"
                  value={form.password2}
                  onChange={handleEdits}
                  className="form-control"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          </div>

          <button
            className="btn btn-secondary w-100"
            data-mdb-button-init
            data-mdb-ripple-init
            disabled={!checkForm()}
            type="submit"
            // onClick={() => setLoading(true)}
          >
            Sign Up Now
            {loading && (
              <div
                className="spinner-border text-light d-flex p-1 justify-content-center align-items-center"
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderWidth: "4px",
                  margin: "auto",
                }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </button>
          <div className="text-start">
            <p className="text-center">
              Already have an Account?{" "}
              <Link to="/login" className="fw-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
