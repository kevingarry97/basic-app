import React from 'react'
import Coverage from '../components/coverage';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import HeroSecion from '../components/hero';
import SubscriptionPage from '../components/subscription';

const HomePage = () => {
  return (  
    <>
      <HeroSecion />
      <div className="container py-4">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="font-weight-bold primary-text">Available for you in</h1>
          <div className="dropdown ml-3">
            <button className="btn btn-light px-3 border" data-toggle="dropdown">
              <h4>
                <span className="font-weight-bold primary-text pr-2">
                  RWANDA
                </span>
                <span className="pl-4">
                  <i className="fa fa-chevron-down text-primary" />
                </span>
              </h4>
            </button>
            <div className="dropdown-menu px-2">
              <div className="input-group align-items-center">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white border-0">
                    <i className="fa fa-search text-muted" />
                  </span>
                </div>
                <input type="text" className="form-control border-0" placeholder="Search..." />
              </div>
              <hr />
              <div className="my-3">
                <a className="dropdown-item my-3" href="#">
                  Pakistan
                </a>
                <a className="dropdown-item my-3" href="#">
                  Ethiopia
                </a>
                <a className="dropdown-item my-3" href="#">
                  Algeria
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionPage />
      <Coverage />
      <FAQ />
      <Footer />
    </>
  );
}
 
export default HomePage;
