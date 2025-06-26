import shirt1 from '../assets/shirt1.png';
import shirt2 from '../assets/shirt2.png';
import shirt3 from '../assets/shirt3.png';
import bigshirt from '../assets/bigshirt.png';

const Breadcrumb = () => {
    return (
        <>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    <li className="breadcrumb-item active" aria-current="page">Men</li>
                    <li className="breadcrumb-item active" aria-current="page">T-Shirts</li>
                </ol>
            </nav>
            <div className="container mt-4">
                <div className="row">


                    <div className="col-md-2 d-flex flex-column gap-2">

                        <img
                            src={shirt1}
                            alt="Shirt 1"
                            className="img-thumbnail"
                            style={{ width: '152px', height: '172px', borderRadius: '20px', top: '216px', left: '100px' }}
                        />
                        <img
                            src={shirt2}
                            alt="Shirt 2"
                            className="img-thumbnail"
                            style={{ width: '152px', height: '172px', borderRadius: '20px', top: '216px', left: '100px' }}
                        />
                        <img
                            src={shirt3}
                            alt="Shirt 3"
                            className="img-thumbnail"
                           
                        />
                    </div>


                    <div className="col-md-4 position-relative d-flex align-items-left justify-content-left">
                        <img
                            src={bigshirt}
                            alt="Big Shirt"
                            className="img-thumbnail h-75 w-100"
                          
                        />
                       
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-center text-uppercase fw-bold fs-1'>
                            ONE LIFE GRAPHIC T-SHIRT
                        </h1>


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
                        <div>
                            <span className="fw-bold text-dark me-2">$260</span>
                            <span className="text-muted text-decoration-line-through">$300</span>
                            <span className="badge bg-danger">-40%</span>
                            <p>This graphic t-shirt which is perfect for any occasion.Crafted from a soft and <br />
                                breathable fabric. it offers superior Comfort and style.
                                <hr />

                            </p>
                            <p>Select Colors</p>
                            <div className="d-flex gap-lg-3 gap-sm-2">
                                <div className="circle-color text-light"></div>
                                <div className="circle-colors"></div>
                                <div className="circle-colorss"></div>
                            </div>
                            <hr />
                         <p>Choose Size</p>
                         <ul class="nav nav-pills my-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill active "id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Small</button>  
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Medium</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Large</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">X-Large</button>
  </li>
</ul>
  <hr />
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"></div>
</div>

<div class="d-inline-flex align-items-center border rounded-pill overflow-hidden quantity-control">
  <button class="btn btn-outline-secondary border-0 rounded-0">-</button>
  <span class="px-3">1</span>
  <button class="btn btn-outline-secondary border-0 rounded-0">+</button>
  
</div>
                            
                            <button className="btn btn-primary rounded-pill mt-0 w-90">
                                Add to Cart
                                </button>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;

