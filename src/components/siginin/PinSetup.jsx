"use client"
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "./index.css"
import { useRouter } from 'next/navigation';
const PinSetup = () => {
  const [pin, setpin] = useState('');
  const [message, setMessage] = useState('');

 const router = useRouter()
  const handlePin = (e) => {
    setpin(e.target.value);
  };



  const handleClick = (e) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   setMessage('Erroe Setting up Pin');
    // } else {
    //   setMessage('Pin setup Sucessfully');
    //   // Proceed with your form submission logic
    // }
    // if (message === "sucess"){
        router.push('/HomeDashboard');
        // }
  };

  return (
   <div >
            <div>
                <h2>Setup Pin</h2>
                <p>Enter a 6-digit code you wont forget</p>

     <Form className='form2 ' >
      <Form.Group className='mb-2' controlId="password">
        <Form.Label className='label'></Form.Label>
        <Form.Control
        size='lg'
          type="text"
          placeholder="Enter 6 digit pin"
          maxLength={6}
          minLength={6}
          value={pin}
          onChange={handlePin}
        />
      </Form.Group>
           


      <Button variant="primary" type="click" className='button' onClick={handleClick} >
      {/* <Link href="/siginin" className='link2'> */}
          Go to HomePage
          {/* </Link> */}
        {message && <Alert variant="danger">{message}</Alert>}

      </Button>
    </Form>
    </div>
    
   </div>
  );
};

export default PinSetup;
