import React from 'react';
import visa from '../assets/visa.png';
import MasterCard from '../assets/mastercard.png';
import paypal from '../assets/paypal.png';
import pay from '../assets/pay.png';
import Googlepay from '../assets/googlepay.png';
import './LastFooter.css'; 
const LastFooter = () => {
  return (
    <div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top  text-dark px-5">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-light text-decoration-none" aria-label="Bootstrap">
            <svg className="bi me-2" width="32" height="32" aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
        </div>
        
     
        <div className="project">
 
  <h1 className="fw-bold">SHOP.CO</h1>


  <p className="text-muted">
    We have clothes that suits your style and which you’re proud to wear. From women to men.
  </p>

 
  <div className="d-flex gap-3">
    <a href="#" className="text-black fs-4"><i className="fab fa-twitter"></i></a>
    <a href="#" className="text-black fs-4"><i className="fab fa-facebook-f"></i></a>
    <a href="#" className="text-black fs-4"><i className="fab fa-instagram"></i></a>
    <a href="#" className="text-black fs-4">
  <i className="fab fa-github"></i>
</a>

  </div>
</div>

          <div className="col mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Work</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Careers</a></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Help</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Customer Support</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Delivery Details</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Terms &Conditions</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Privacy Policy</a></li>

          </ul>
        </div>
        <div className="col mb-3">
          <h5>FAQ</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Account</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Manage deliveries</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Orders</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Payements</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Resources</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Free eBoooks</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Developement Tutorial</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">How to -Blog</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">Youtube Plalist</a></li>
          </ul>
        </div>


      </footer>
      <hr />

      <div className="container py-0">
        <div className="visa-image">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="images">
            <img src={visa} alt="visaimage" />
            <img src={MasterCard} alt="visaimage" />
            <img src={paypal} alt="visaimage" />
            <img src={pay} alt="visaimage" />
            <img src={Googlepay} alt="visaimage" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default LastFooter;
