import React from 'react';
import Logo from '../assets/images/brand_logo_inverse.svg';

const Footer = () => {
  return (  
    <footer className="py-5 primary-bg">
      <div className="container">
        <div className="row border-bottom pb-5">
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white">Company and team</h6>
            <div className="d-flex flex-column mt-4">
              <a href="#" className="text-white text-decoration">Company and team</a>
              <a href="#" className="text-white text-decoration">News and blog</a>
              <a href="#" className="text-white text-decoration">Press</a>
              <a href="#" className="text-white text-decoration">Careers</a>
              <a href="#" className="text-white text-decoration">Affiliates and partnerships</a>
              <a href="#" className="text-white text-decoration">Modern slavery statement</a>
              <a href="#" className="text-white text-decoration">Wise Business</a>
              <a href="#" className="text-white text-decoration">Investor relations</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white">Help and support</h6>
            <div className="d-flex flex-column mt-4">
              <a href="#" className="text-white text-decoration">help centre</a>
              <a href="#" className="text-white text-decoration">Mid-market rate</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white">Learn more</h6>
            <div className="d-flex flex-column mt-4">
              <a href="#" className="text-white text-decoration">international money transfers</a>
              <a href="#" className="text-white text-decoration">Swift/BIC codes</a>
              <a href="#" className="text-white text-decoration">Currency converter</a>
              <a href="#" className="text-white text-decoration">IBAN codes</a>
              <a href="#" className="text-white text-decoration">Rate alerts</a>
              <a href="#" className="text-white text-decoration">Compare exchange rates</a>
              <a href="#" className="text-white text-decoration">Security</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white">Follow us</h6>
            <div className="mt-4">
              <i className="fa fa-facebook mx-3 text-white fa-2x" />
              <i className="fa fa-twitter mx-3 text-white fa-2x" />
              <i className="fa fa-instagram mx-3 text-white fa-2x" />
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-lg-3 col-md-6 mt-4">
            <img src={Logo} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column mt-4">
              <a href="#" className="text-white text-decoration">Legal</a>
              <a href="#" className="text-white text-decoration">Country site map</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column mt-4">
              <a href="#" className="text-white text-decoration">Privacy policy</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column mt-4">
              <a href="#" className="text-white text-decoration">Cookie policy</a>
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="text-center text-white">&copy; Wise Payments limited 2021</p>
          <p className="text-center text-white my-4">Wise is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011, Firm Reference 900507, for the issuing of electronic money.</p>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;
