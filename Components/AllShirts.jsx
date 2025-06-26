import React from 'react'
import abcshirt1 from '../assets/abcshirt1.png'; 
import abcshirt2 from '../assets/abcshirt2.png';
import abcshirt3 from '../assets/abcshirt3.png';
import abcshirt4 from '../assets/abcshirt4.png';
const AllShirts = () => {
  return (
   <div className="container my-4">
  

    <div className="row g-sm-4">
          <h1 className="text-center py-2">YOU MIGHT ALSO BE LIKE</h1>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card border-0">
                <img className="card-img-top fixed-img" src={abcshirt1} alt="abcshirt" />

                <div className="card-body">
                    <p className='CardText'>
                        Polo with Contrast Trims
                    </p>
                   <div>
                    <span className="text-warning">
                        <i className="fas fa-star"></i>
                       <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="ms-2">4.5/5</span>
                   </div>
                          <span className="fw-bold text-dark me-2">$212</span>
                           <span className="text-muted text-decoration-line-through">$242</span>
                         <span className="badge bg-danger">-20%</span>
                </div>

            </div>
        </div>


        

         <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card border-0">
                <img className="card-img-top fixed-img" src={abcshirt2} alt="abcshirt" />
                 <div className="card-body">
                    <p className='CardText'>
                        Gradient Graphic T Shirt
                    </p>
                   <div>
                    <span className="text-warning">
                        <i className="fas fa-star"></i>
                       <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="ms-2">3.5/5</span>
                   </div>
                          <span className="fw-bold text-dark me-2">$145</span>
                         
                </div>

            </div>
        </div>

         <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card border-0">
                <img className="card-img-top fixed-img" src={abcshirt3} alt="abcshirt" />

                 <div className="card-body">
                    <p className='CardText'>
                        Polo with Tippind Details
                    </p>
                   <div>
                    <span className="text-warning">
                        <i className="fas fa-star"></i>
                       <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="ms-2">4.5/5</span>
                   </div>
                          <span className="fw-bold text-dark me-2">$180</span>
                           
                </div>

            </div>
        </div>


         <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card border-0">
                <img className="card-img-top fixed-img" src={abcshirt4} alt="abcshirt" />

                 <div className="card-body">
                    <p className='CardText'>
                        Black Striped T-shirt
                    </p>
                   <div>
                    <span className="text-warning">
                        <i className="fas fa-star"></i>
                       <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </span>
                    <span className="ms-2">5.0/5</span>
                   </div>
                          <span className="fw-bold text-dark me-2">$120</span>
                           <span className="text-muted text-decoration-line-through">$150</span>
                         
                </div>

            </div>
        </div>

        

    </div>

   </div>
  )
}

export default AllShirts