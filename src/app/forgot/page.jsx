"use client"
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { InputGroup, FormControl } from 'react-bootstrap';
import {eye} from "../../assets/images"
import Image from 'next/image';
import "../../components/siginin/index.css"
// import PhoneVerification from './phoneverification';

const Passwordreset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loadComponent, setLoadComponent] = useState(false);

  const handleClick = () => {
    setLoadComponent(true);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Proceed with your form submission logic
    }
  };

  return (
   <div className='section' >
        {/* {!loadComponent ? ( */}
            <div className='section2'>
                  <h2 >Reset Password</h2>

                 <Form className='form2 ' onSubmit={handleSubmit}>
                 <Form.Group className='mb-2' controlId="password">
        <Form.Label className='label'>Password</Form.Label>
        <InputGroup  className='mb-2' controlId="password">

                
            <FormControl
                placeholder="Enter password"
                aria-describedby="inputGroupPrepend"
              required
              className='inpute'
              value={password}
              onChange={handlePasswordChange}
              size='lg'
                type="password"
            />
              <InputGroup.Text id="inputGroupPrepend" className='bg-white'>
              <Image src={eye} alt="placeholder" width={20} height={20} />
            </InputGroup.Text>
            </InputGroup>
      </Form.Group>
    
      <Form.Group className='mb-2' controlId="password">
        <Form.Label className='label'>Confirm Password</Form.Label>
        <InputGroup  className='mb-2' controlId="password">

    
<FormControl
    placeholder="Confirm password"
    aria-describedby="inputGroupPrepend"
  required
  className='inpute'
  value={confirmPassword}
  onChange={handleConfirmPasswordChange}
  size='lg'
    type="password"
/>
  <InputGroup.Text id="inputGroupPrepend" className='bg-white'>
  <Image src={eye} alt="placeholder" width={20} height={20} />
</InputGroup.Text>
</InputGroup>
      </Form.Group>
     

      {error && <Alert variant="danger">{error}</Alert>}

      <Button variant="primary" type="submit" className='button' onClick={handleClick}>
        Reset
      </Button>
    </Form>
            </div>


{/*     
     ) : (
        <PhoneVerification />
      )} */}
   </div>
  );
};

export default Passwordreset;
