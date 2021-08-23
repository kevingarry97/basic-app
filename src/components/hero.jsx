import React from 'react'
import Navbar from './navbar';
import Search from '../assets/images/FCA.svg';
import Star from '../assets/images/stars.svg';
import EN from '../assets/images/gbp.png';
import EUR from '../assets/images/eur.png';

const HeroSecion = () => {
  return ( 
    <>
      <Navbar />
      <main>
        <section className="bg-image">
          <div className="container mt-5 pt-5">
            <div className="row mt-md-5 pt-md-3">
              <div className="col-md-7 my-3 d-flex flex-column justify-content-between">
                <div>
                  <h1 className="font-weight-bold text-white pb-3">The cheap, fast way to send money abroad.</h1>
                  <span className="text-white f-20">An international account to send money to over 60 countries around the world, up to <a href="/" className="text-decoration"> 8x cheaper than a bank.</a></span>
                  <button className="btn text-primary text-decoration"><h5>See how it works</h5></button>
                </div>
                <div className="d-none d-md-flex flex-wrap align-items-center">
                  <div className="mx-md-4">
                    <img src={Star} className="img-fluid w-50" alt="" />
                    <h6 className="mt-2 mb-0 text-white mt-4">Over 10 million customers</h6>
                    <a href="#" className="text-primary">Read on trustpilot {'>'}</a>
                  </div>
                  <div className="mx-md-5">
                    <img src={Search} className="img-fluid w-25" alt="" />
                    <h6 className="mt-2 mb-0 text-white">FCA regulated</h6>
                    <a href="#" className="text-primary">Learn more {'>'}</a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 my-3">
                <div>
                  <div className="form-group custom-group">
                    <label className="custom-label text-muted" for="basic-url">You Send</label>
                    <div className="input-group mb-3">
                      <input type="text" className="input-lg form-control f-20" placeholder="1,000" />
                      <div className="input-group-append primary-bg d-flex align-items-center">
                        <div className="btn-group btn-block dropdown">
                          <button className="btn" data-toggle="dropdown">
                            <span className="font-weight-bold text-white pr-2">
                              <img src={EN} className="img-fluid w-25 mr-2" alt="" />
                              GPG
                            </span>
                            <span className="pl-4">
                              <i className="fa fa-chevron-down text-primary" />
                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right px-2 mt-3">
                            <div className="input-group mb-3 align-items-center">
                              <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-0">
                                  <i className="fa fa-search text-muted" />
                                </span>
                              </div>
                              <input type="text" className="form-control border-0" placeholder="Type a currency / country" />
                            </div>
                            <hr />
                            
                            <p className="ml-3 text-muted">Popular currencies</p>
                            <div className="my-3">
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                            </div>
                            <p className="ml-3 text-muted">All currencies</p>
                            <div className="my-3">
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="timeline">
                    <li>
                      <div className="timeline-icon">
                        <a className="align-items-center justify-content-center pb-1">-</a>
                      </div>
                      <div className="timeline-body">
                        <div className="d-flex">
                          <span className="font-weight-bold text-white">3.69 GBP</span>
                          <div className="primary-bg py-1 px-md-4 px-2 mx-md-4 mx-2">
                            <small className="text-white">Low cost transfer</small>
                            <i className="fa fa-chevron-down ml-3 text-primary"></i>
                          </div>
                          <span className="text-white">fee</span>
                        </div>
                      </div>
                      
                    </li>
                    <li>
                      <div className="timeline-icon">
                        <a className="align-items-center justify-content-center pb-1">=</a>
                      </div>
                      <div className="timeline-body">
                        <div className="d-flex">
                          <span className="text-white">995.69 GBP</span>
                          <div className="mx-lg-4 mx-2">
                            <span className="text-white">Amount we'll convert</span>
                          </div>
                        </div>
                      </div>
                      
                    </li>
                    <li>
                      <div className="timeline-icon">
                        <a className="align-items-center justify-content-center pb-1">x</a>
                      </div>
                      <div className="timeline-body">
                        <div className="d-flex">
                          <span><b className="text-primary font-weight-bold">3.69 GBP</b></span>
                          <div className="mx-lg-4 mx-2">
                            <span className="text-white">Guaranteed rate (2 hrs)</span>
                          </div>
                        </div>
                      </div>
                      
                    </li>
                  </ul>
                  <div className="form-group custom-group">
                    <label className="custom-label text-muted" for="basic-url">Recipient gets</label>
                    <div className="input-group mb-3">
                      <input type="text" className="input-lg form-control border-0 f-20" placeholder="1,000" />
                      <span className="bg-white border-0 px-3 d-flex align-items-center">
                        <i className="fa fa-lock fa-2x text-muted" />
                      </span>
                      <div className="input-group-append primary-bg d-flex align-items-center">
                        <div className="btn-group btn-block dropdown">
                          <button className="btn" data-toggle="dropdown">
                            <span className="font-weight-bold text-white pr-2">
                              <img src={EUR} className="img-fluid w-25 mr-2" alt="" />
                              EUR
                            </span>
                            <span className="pl-4">
                              <i className="fa fa-chevron-down text-primary" />
                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right px-2 mt-3">
                            <div className="input-group mb-3 align-items-center">
                              <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-0">
                                  <i className="fa fa-search text-muted" />
                                </span>
                              </div>
                              <input type="text" className="form-control border-0" placeholder="Type a currency / country" />
                            </div>
                            <hr />
                            
                            <p className="ml-3 text-muted">Popular currencies</p>
                            <div className="my-3">
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                            </div>
                            <p className="ml-3 text-muted">All currencies</p>
                            <div className="my-3">
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                              <a className="dropdown-item my-3" href="#">
                                <img src={EN} width="30" className="mr-2" alt="" />
                                EUR
                                <span className="ml-2 text-muted">Euro</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center text-white mt-5">
                    <div className="col-md-6 border-right d-none d-md-block">
                      <h6>You could save vs banks</h6>
                      <h5 className="font-weight-bold">24.20 GBP</h5>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                      <h6>Should arrive</h6>
                      <h5 className="font-weight-bold">By August 19th</h5>
                    </div>
                    <div className="col-md-6 mt-4">
                      <button className="btn btn-primary btn-block py-3">
                        <b>Compare price</b>
                      </button>
                    </div>
                    <div className="col-md-6 mt-4">
                      <button className="btn btn-success btn-block py-3">
                        <b>Get Started</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
 
export default HeroSecion;
