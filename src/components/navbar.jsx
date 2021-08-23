import React, { useState } from 'react';
import Logo from '../assets/images/brand_logo_inverse.svg';
import SendMoney from '../assets/images/send-money.svg';
import MultiCurrency from '../assets/images/multi_currency_account_v2.svg';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
		if (window.scrollY >= 50) return setNavbar(true);

		return setNavbar(false);
	};

	window.addEventListener('scroll', changeBackground);

  return (  
    <nav class={navbar
      ? 'navbar navbar-expand-md navbar-light fixed-top active shadow py-4'
      : 'navbar navbar-expand-md fixed-top navbar-light py-4'}>
      <div className="container">
        <img src={Logo} className="img-fluid" alt="" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item px-3 my-md-0 my-2">
              <a class="text-primary font-weight-bold nav-link m-0 p-0 f-16" href="#">Personal</a>
            </li>
            <li class="nav-item border-left px-3 my-md-0 my-2">
              <a class={`${!navbar && 'text-white'} font-weight-bold nav-link m-0 p-0 f-16`} href="#">Business</a>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav">
              <li class="nav-item px-3 my-md-0 my-2 dropdown">
                <a class={`${!navbar && 'text-white'} nav-link m-0 p-0 dropdown-toggle f-16`} href="#" id="dropdown01" data-toggle="dropdown">Money Transfer</a>
                <div className="dropdown-menu dropdown-menu-right menu pt-md-4 mt-3" style={{position: 'absolute'}} aria-labelledby="dropdown01">
                  <div className="dropdown-item px-md-4 px-2">
                    <img src={SendMoney} alt="" />
                  </div>
                  <p className="mt-4 primary-text f-20 px-md-4 px-2">Send money</p>
                  <p className="mt-4 f-20 font-weight-light mx-md-4 mx-2">Make a one-off payment. You'll get the real exchange rate with the low fee we're known for.</p>
                  <div className="mt-3 border-top bg-light px-md-2 px-2 py-4">
                    <a className="dropdown-item primary-text py-2" href="#"><b>Send large amounts</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Send money for students</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>About Africa XYZ</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Track your transfer</b></a>
                  </div>
                </div>
              </li>

              <li class="nav-item px-3 my-md-0 my-2 dropdown">
                <a class={`${!navbar && 'text-white'} nav-link m-0 p-0 dropdown-toggle f-16`} href="#">Multi-currency account</a>
                <div className="dropdown-menu dropdown-menu-right menu pt-md-4 mt-3" style={{position: 'absolute'}} aria-labelledby="dropdown01">
                  <div className="dropdown-item px-md-4 px-2">
                    <img src={MultiCurrency} alt="" />
                  </div>
                  <p className="mt-4 primary-text f-20 px-md-4 px-2">Multi-currency account</p>
                  <p className="mt-4 f-20 font-weight-light mx-md-4 mx-2">Manage your money across 50+ currencies. Send at the real exchange rate, and spend with a AfricaXyz debit card</p>
                  <div className="mt-3 border-top bg-light px-md-2 px-2 py-4">
                    <a className="dropdown-item primary-text py-2" href="#"><b>Product feature</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Pricing</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Use cases</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Getting started</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Protecting your money</b></a>
                    <a className="dropdown-item primary-text py-2" href="#"><b>Coverage</b></a>
                  </div>
                </div>
              </li>

              <li class="nav-item px-3 my-md-0 my-2">
                <a class={`${!navbar && 'text-white'} nav-link m-0 p-0`} href="#">Help</a>
              </li>

              <li class="nav-item px-3 my-md-0 my-2 dropdown">
                <a class={`${!navbar && 'text-white'} nav-link m-0 p-0 dropdown-toggle f-16`} href="#">
                  <i className="fa fa-globe" /> &nbsp; 
                  <span>EN</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right menu pt-md-4 mt-3" style={{position: 'absolute'}} aria-labelledby="dropdown01">
                  <h3 className="ml-4 font-weight-bold">Hello world<b className="text-info">.</b></h3>
                  <div className="mt-3 border-top bg-light px-md-4 px-2 py-4">
                    <div className="row">
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Deutsch</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">English (UK)</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="text-info f-20" href="#">
                          English (US)
                          <i className="fa fa-check text-info ml-2" />
                        </a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">spanol</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Francais</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Italiano</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Bahasa Indonesia</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Magyar</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Polski</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Poltuguese</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Romana</a>
                      </div>
                      <div className="col-md-6 my-2">
                        <a className="primary-text f-20" href="#">Turkce</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li class="nav-item px-3 my-md-0 my-2">
                <a class={`${!navbar && 'text-white'} nav-link m-0 p-0`} href="#">Log in</a>
              </li>
              <button class="btn btn-outline-info my-2 my-sm-0 px-4 rounded-0 py-1" type="submit"><small>Register</small></button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;
