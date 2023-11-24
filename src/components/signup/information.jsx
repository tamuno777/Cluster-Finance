"use client"
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button,Dropdown } from 'react-bootstrap';
import { gender, list } from '../../constant';
import "./index.css"
import Link from 'next/link';
import { useState } from 'react';
import Password from './password';
import Image from 'next/image';
import { nigeria } from '../../assets/images';

export default function Information() {
  const [loadComponent, setLoadComponent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  const handleClick = () => {
    setLoadComponent(true);
  };
  return (
    <div className='section2' >
                    {!loadComponent ? (

     
    <div>
        <h2 >Improtant information</h2>

<div>


  <>
 
  <Form className='form2' >
 
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className='label'>Full Name</Form.Label>
  <Form.Control type="text" size="lg" required placeholder="Enter your Full Name" />
</Form.Group>



<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className='label'>Gender</Form.Label>
  <Form.Select size="lg" required >
      <h3>Choose your Gender</h3>
    {gender.map((options) => (

      <option  key={options.id} className='options' >
        
        <p>
          {options.headerText}
        </p>
      </option>
    ))}
    </Form.Select>
</Form.Group>
   

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className='label'>Email address</Form.Label>
  <Form.Control type="email" size="lg" className='inpute' required placeholder="name@example.com" />
</Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label className='label'>Enter your Phone Number</Form.Label>
  <div className='phone'>
      <Dropdown className='phone__select'>
        <Dropdown.Toggle variant="white" className='diva2 dropdown2 d-flex' id="dropdown-basic">
          {selectedCountry ? (
            
            <div className='d-flex' style={{height:"25px"}}>
               <div className='icon '>
                <Image src={selectedCountry.icon} width={100} height={100} alt='img' className='img'/>
              </div>
            <div className='mx-2'>
              <p>{selectedCountry.sub}</p>
            </div>
            </div>
          ) : (
            <div className='d-flex  ' style={{alignItems:"center",height:"25px"}}>
            <div className='icon'>
             <Image src={nigeria} width={100} height={50} alt='img' className='img'/>
           </div>
         <div className='mx-2'  style={{alignItems:"center"}}>
           <p>NGN</p>
         </div>
         </div>
           )}
        </Dropdown.Toggle>

        <Dropdown.Menu className='menu'>
          {list.map((options) => (
            <Dropdown.Item key={options.id}  onClick={() => handleSelect(options)}  className='d-flex gap-4 coun'>
              <div className='icon'>
                <Image src={options.icon} width={100} height={100} alt='img' className='img'/>
              </div>
              <p>{options.sub}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    {/* </Form.Select> */}
    <Form.Control type="tel" className='inpute' placeholder="2398474843" />

  </div>
</Form.Group>



    <Button onClick={handleClick} className='button mt-5' variant="primary">
    {/* <Link href="/register" className='link2'> */}
    Continue
    {/* </Link> */}
    </Button>{' '}
    </Form>

  </>

</div>
    </div>
      ) : (
        <Password />
      )}
    </div>
  )
}
