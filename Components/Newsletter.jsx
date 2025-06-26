import React from 'react';
import './Newsletter.css'; 

const Newsletter = () => {
  return (
    <div className="container  my-6">
      <div className="newsletter-box d-flex justify-content-between align-items-center flex-wrap">
       
        <div>
          <h4 className="mb-0">STAY UP TO DATE</h4>
          <h5 className="mb-0">ABOUT OUR LATEST OFFERS</h5>
        </div>
         <div className="new">
                <form className="newsletter-form d-flex mt-3 mt-md-0">
          <input
            type="email"
            className="form-control me-2 newsletter-input"
            placeholder="Enter your email address"
            
          />
           <div className="container">
            <button type="submit" className="btn-light">
            Subscribe to Newsletter
          </button>
          </div>
          
        </form>
         </div>


         

         
      
      </div>
    </div>
  );
};

export default Newsletter;


