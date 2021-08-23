import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FAQ = () => {
  return (  
    <main className="bg-light py-5">
      <div className="container">
        <h6 className="text-muted text-center">Frequently asked questions</h6>
        <h1 className="my-3 primary-text text-center"><b>Let's answer some of your questions</b></h1>
        <div className="my-4">
          <div className="my-5">
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="py-2"

              >
                <Typography className="font-weight-bold">How to pay using E-merchant Card ?</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-light border-lefts">
                <Typography className="text-left">
                  You have to enter the amount money you want to pay and the Merchant ID of the merchant.  Once you confirm that the ID and name of merchant match, choose the "payment method" and click on "Continue" then you will be redirect on the payment where you will fill the payment information's and validate the payment. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="py-2"
              >
                <Typography className="font-weight-bold">How to receive payments ?</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-light border-lefts">
                <Typography className="text-left">
                  First, you neet to create a Merchant Account (emc.xyz/register) . Once the application is successful you will get access to the dashboard where you will be able to generate payment links and share to your customers worldwide. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="my-2">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="py-2"
              >
                <Typography className="font-weight-bold">How long does it take ?</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-light border-lefts">
                <Typography className="text-left">
                  In most cases, transfers arrive instantly, however some transfers can take longer depending on how the money is being received. Your transfer will not start until we have received authorisation from your payment provider.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default FAQ;
