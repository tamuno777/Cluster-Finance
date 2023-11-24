"use client"
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Dropdown } from 'react-bootstrap';
import { list } from '../../constant/index';
import Image from 'next/image';
import "./index.css"
import Link from 'next/link';
import { useState } from 'react';
import Information from './information';

export default function Signup() {
  const [loadComponent, setLoadComponent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (options) => {
    setSelectedCountry(options);
    console.log(options);
  };

  const handleClick = () => {
    setLoadComponent(true);
  };
  return (
    <div className='section'>
              {!loadComponent ? (

          <div className='section2'>

            
      <h3 className='text-center'>What country do you currently live in ?</h3>

<div>


  <>
  <div>
    <h4 className='text-left py-2'>
    Country
    </h4>
  </div>
  <Form className='form1' >

  <Dropdown >
        <Dropdown.Toggle variant="white" className='diva dropdown' id="dropdown-basic">
          {selectedCountry ? (
            <div className=''>
          
              <p>{selectedCountry.headerText}</p>
            </div>
          ) : (
            ' NIGERIA'
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu className='menu'>
          <h2>Choose your Country</h2>
          {list.map((options) => (
            <Dropdown.Item key={options.id}  onClick={() => handleSelect(options)}  className='d-flex gap-4 coun'>
              <div className='icon'>
                <Image src={options.icon} width={100} height={100} alt='img' className='img'/>
              </div>
              <p>{options.headerText}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    


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
        <Information />
      )}
    </div>
  )
}
