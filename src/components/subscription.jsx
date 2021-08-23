import React from 'react';
import Logo from '../assets/images/brand_logo_inverse.svg';
import WorldRemit from '../assets/images/world-remit.svg';
import Xoom from '../assets/images/xoom.svg';
import WesternUnion from '../assets/images/western-union.svg';
import MoneyGram from '../assets/images/moneygram.svg';
import Monese from '../assets/images/monese.svg';
import Remitly from '../assets/images/remitly.svg';
import BarClays from '../assets/images/barclays.svg';
import Halifax from '../assets/images/halifax.svg';
import Lloyds from '../assets/images/lloyds.svg';
import Paypal from '../assets/images/paypal.svg';
import Image1 from '../assets/images/image1.jpeg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpeg';
import Image4 from '../assets/images/image4.jpeg';

const SubscriptionPage = () => {
  return (  
    <main className="bg-light pt-4">
      <div className="container py-2">
        <p className="text-center mb-4 primary-text">Compare our pricing</p>
        <h1 className="text-center primary-text"><b>We charge as little as possible. No <br /> subscription<b className="text-info">.</b></b></h1>
        <div className="container py-5">
          <table className="bg-white">
            <thead>
              <tr>
                <th>
                  Sending 1,000.00 GBP
                </th>
                <th>
                  Recipient gets
                  <br />
                  <small>(Total after frees)</small>
                </th>
                <th>
                  transfer free
                </th>
                <th>
                  Exchange rate
                  <br />
                  <small>(1 GBP <i className="fa fa-long-arrow-right" /> EUR)</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="row_first">
                <td>
                  <img src={Logo} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <b className="text-success">Save up to 41.20 EUR</b>
                </td>
                <td>3.69 GBP</td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-success" />
                  </div>
                  <small>Mid-market rate</small>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={WorldRemit} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={Xoom} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={WesternUnion} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={MoneyGram} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={Monese} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={Remitly} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={BarClays} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={Halifax} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={Lloyds} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <i className="fa fa-caret-down text-danger" /> &nbsp;
                  <b className="text-danger">
                    - 5.98 EUR
                  </b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
              <tr className="border-bottom">
                <td>
                  <img src={Paypal} width="140" alt="" />
                </td>
                <td>
                  <h5>1,170.28 EUR</h5>
                  <b className="text-success">Save up to 41.20 EUR</b>
                </td>
                <td><h6>3.69 GBP</h6></td>
                <td>
                  <div className="d-flex justify-content-center">
                    1.1761
                    <div className="box align-self-start ml-1 mt-2 bg-danger" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row align-items-center">
          <div className="col-xl-6 order-xl-last px-0">
            <img src={Image1} className="img-fluid" alt="" />
          </div>
          <div className="col-xl-6 order-xl-first px-0">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <h1 className="primary-text my-5"><b>Moving and living abroad <br /> just got simpler <b className="text-info">.</b></b></h1>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 px-0">
            <img src={Image2} className="img-fluid" alt="" />
          </div>
          <div className="col-xl-6 px-0">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <h1 className="primary-text my-5"><b>Moving and living abroad <br /> just got simpler <b className="text-info">.</b></b></h1>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 order-xl-last px-0">
            <img src={Image3} className="img-fluid" alt="" />
          </div>
          <div className="col-xl-6 order-xl-first px-0">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <h1 className="primary-text my-5"><b>Moving and living abroad <br /> just got simpler <b className="text-info">.</b></b></h1>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 px-0">
            <img src={Image4} className="img-fluid" alt="" />
          </div>
          <div className="col-xl-6 px-0">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <h1 className="primary-text my-5"><b>Moving and living abroad <br /> just got simpler <b className="text-info">.</b></b></h1>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="primary-bg">
        <div className="container py-5 text-center">
          <h6 className="text-white">Getting started</h6>
          <h1 className="mt-4 text-white">Get set up and start spending with <br /> your card in minutes.</h1>
          <div className="row mt-5">
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white">Register in minutes</h4>
              <p className="mt-3 text-white">Sign up online, or in our app with an email address, or a Google, Facebook or Apple account.</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white">Verify your identity</h4>
              <p className="mt-3 text-white">All you need to receive money or order a card is your government ID.</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white">Top up your account</h4>
              <p className="mt-3 text-white">You can add money using your bank account, Apple Pay, credit/debit card.</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white">Register in minutes</h4>
              <p className="mt-3 text-white">Share your account details to get paid, or spend around the world with your debit card.</p>
            </div>
          </div>
          <button className="btn btn-outline-light mt-4 px-4 py-3">Get an account in minutes</button>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 px-0">
            <img src={Image4} className="img-fluid" alt="" />
          </div>
          <div className="col-xl-6 px-0">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <h1 className="primary-text my-5"><b>Moving and living abroad <br /> just got simpler <b className="text-info">.</b></b></h1>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
                <h5 className="primary-text my-4"><b>Receive your salary, pension, and more.</b></h5>
                <p className="my-4">Relocate without the stress — and without the multiple bank accounts. Share your details with your employer, pension scheme, family or friends, and get paid like a local.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default SubscriptionPage;
