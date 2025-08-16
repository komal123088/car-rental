import "../styles/payment.css";
import { FaStar } from "react-icons/fa";
import view1 from "../assets/image/view1.png";
import visa from "../assets/image/visa.png";
import paypal from "../assets/image/paypal.png";
import bitcoin from "../assets/image/Bitcoin.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();

  return (
    <>
      <div className="checkout-container">
        {/* Left Side Form */}
        <div className="checkout-left">
          <div className="section1 billing-section">
            <h3>Billing Info</h3>
            <p className="sub-text">
              Please enter your billing info <span>Step 1 of 4</span>
            </p>

            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Town / City</label>
                <input
                  type="text"
                  placeholder="Town or city"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="checkout-right">
          <div className="rental-summary">
            <h4>Rental Summary</h4>
            <p className="summary-subtitle">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>

            <div className="summary-car">
              <img src={view1} />
              <div className="summary-car-info">
                <h5>Nissan GT - R</h5>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="apply">
              <input type="text" placeholder="Apply Promo Code" />
              <span>
                <h5>Apply Now</h5>
              </span>
            </div>
            <div className="summary-price">
              <div className="row">
                <span>Subtotal</span>
                <span>$80.00</span>
              </div>
              <div className="row">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="row total">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rental Info */}
      <div className="rental-info">
        <h2 className="title">Rental Info</h2>
        <p className="sub-text">
          Please select your rental date <span>Step 2 of 4</span>
        </p>

        {/* Pick-Up */}
        <div className="section2">
          <label className="radio-label">
            <input type="radio" name="rental" defaultChecked />
            <span>Pick – Up</span>
          </label>
          <div className="grid">
            <div className="field">
              <p className="label">Locations</p>
              <input
                type="text"
                placeholder="Select your city"
                className="select-box"
              />
            </div>
            <div className="field">
              <p className="label">Date</p>
              <input type="date" className="select-box" />
            </div>
            <div className="field">
              <p className="label">Time</p>
              <input type="time" className="select-box" />
            </div>
          </div>
        </div>

        {/* Drop-Off */}
        <div className="section2">
          <label className="radio-label">
            <input type="radio" name="rental" />
            <span>Drop – Off</span>
          </label>
          <div className="grid">
            <div className="field">
              <p className="label">Locations</p>
              <input
                type="text"
                placeholder="Select your city"
                className="select-box"
              />
            </div>
            <div className="field">
              <p className="label">Date</p>
              <input type="date" className="select-box" />
            </div>
            <div className="field">
              <p className="label">Time</p>
              <input type="time" className="select-box" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-method">
        <h2 className="title">Payment Method</h2>
        <p className="sub-text">
          Please enter your payment method <span>3 of 4</span>
        </p>

        {/* Credit Card */}
        <div className="method-box active">
          <div className="method-header">
            <label className="radio-label">
              <input type="radio" name="payment" defaultChecked />
              <span>Credit Card</span>
            </label>
            <div className="cards-icon">
              <img src={visa} />
            </div>
          </div>
          <div className="grid">
            <div className="field">
              <p className="label">Card Number</p>
              <input type="text" className="input" placeholder="Card number" />
            </div>
            <div className="field">
              <p className="label">Expiration Date</p>
              <input type="text" className="input" placeholder="DD / MM / YY" />
            </div>
            <div className="field">
              <p className="label">Card Holder</p>
              <input type="text" className="input" placeholder="Card holder" />
            </div>
            <div className="field">
              <p className="label">CVC</p>
              <input type="text" className="input" placeholder="CVC" />
            </div>
          </div>
        </div>

        {/* PayPal */}
        <div className="method-box">
          <div className="method-header">
            <label className="radio-label">
              <input type="radio" name="payment" />
              <span>PayPal</span>
            </label>
            <img src={paypal} className="method-icon" />
          </div>
        </div>

        {/* Bitcoin */}
        <div className="method-box">
          <div className="method-header">
            <label className="radio-label">
              <input type="radio" name="payment" />
              <span>Bitcoin</span>
            </label>
            <img src={bitcoin} className="method-icon" />
          </div>
        </div>
      </div>

      {/* Confirmation Section */}
      <div className="confirmation-box">
        <div className="confirmation-header">
          <div>
            <h2>Confirmation</h2>
            <p>
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
          </div>
          <span>Step 4 of 4</span>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-item">
            <input type="checkbox" />
            <span>
              I agree with sending an Marketing and newsletter emails. No spam,
              promised!
            </span>
          </label>
          <label className="checkbox-item">
            <input type="checkbox" />
            <span>
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        <button className="rent-btn2">Rent Now</button>

        <div className="security-info">
          <div className="icon-shield">
            <IoShieldCheckmarkOutline />
          </div>
          <div>
            <h4>All your data are safe</h4>
            <p>
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
