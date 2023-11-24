import React, { useState,useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "./index.css"
import PinSetup from './PinSetup';

const PasswordVerification = () => {
  const [loadComponent, setLoadComponent] = useState(false);

  const handleClick = () => {
    setLoadComponent(true);
  };
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // Function to generate a random 6-digit OTP
  const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
  };

  // Function to handle OTP verification
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
      alert('Incorrect OTP. Please try again.');
    }
  };

  // Function to handle OTP resend
  const resendOtp = () => {
    generateOtp();
    setIsVerified(false);
    alert('OTP resent successfully.');
  };

  // Generate OTP on component mount
  useEffect(() => {
    generateOtp();
  }, []);

  return (
   <div >
        {!loadComponent ? (
            <div>
                <h2>Verify Phone Number </h2>
                <p>Please enter the OTP sent to +23481 2345 5436</p>

     <Form className='form2 ' onSubmit={generateOtp}>
      <Form.Group className='mb-2' controlId="password">
        <Form.Label className='label'></Form.Label>
        <Form.Control
        size='lg'
        className='inpute'
          type="text"
          placeholder="Enter OTP"
          value={otp}
           onChange={(e) => setOtp(e.target.value)}
        />
      </Form.Group>
            <div className='text-center'>
                <p onClick={resendOtp} className='code'>Didnt get the code?</p>
                <p onClick={resendOtp} className='resend'>Resend code!</p>
            </div>
     


      <Button variant="primary" type="submit" className='button' onClick={handleClick}>
        Finish
        {isVerified && <Alert variant="info">Phone Verified Successfully!</Alert>}

      </Button>
    </Form>
    </div>
     ) : (
        <PinSetup />
      )}
   </div>
  );
};

export default PasswordVerification;
