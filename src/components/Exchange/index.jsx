"use client"
import React,{useState} from 'react'
import "./index.css"
import { Form, Button, Dropdown } from 'react-bootstrap';
import { list } from '../../constant'
import Image from 'next/image';
import Link from 'next/link'
import Navbar from '../../sharedlayout/nav';
import {nigeria, uk} from "../../assets/images"

export default function Exchangescreen() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [secondselectedCountry, setsecondSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };
  const handlesecondSelect = (country) => {
    setsecondSelectedCountry(country);
  };
  const handleChange = (e) => {
    // Handle the change if needed
  };
  return (
    <div className='section'>
      <div className='container__div'>
        <div className='info pb-5'>

        
        <div className='first-flex '>
        <Link href="/HomeDashboard">
          &larr; <span>Exchange Money</span>
          </Link>

        </div>

        <div>
        <div className='mt-4 currency'>
            <h3>Enter amount and select the currency to excahnge with</h3>
          
          <div>

            <div>
                <div className='d-flex justify-between am amm'>
                    <p>Currrent Balance</p>
                    <p><Image src={nigeria} alt="rr" height={30} width={30} /> Nigeria Naira</p>
                </div>
                <div>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <div className='d-flex form'>
                    <Form.Control size='lg' onChange={handleChange} type="tel" placeholder="N2000.oo" value="" />

                        </div>
                    </Form.Group>

                    </Form>
                </div>
            </div>

            <div className='mx-2 mb-3'>
                <div className='d-flex justify-between am '>
                    <p>Amount to exchange</p>
                </div>
                <div>
                <Form>
                <div className='d-flex form'>
              <Form.Control type="tel" onChange={handleChange} placeholder="N1000" value= "" />

              <Dropdown className='phone__select w-80'>
        <Dropdown.Toggle variant="white" className='diva  dropdown d-flex p-3 border border-gry'  id="dropdown-basic">
          {selectedCountry ? (
            
            <div className='d-flex coun' style={{height:"20px"}}>
               <div className='icon '>
                <Image src={selectedCountry.icon} width={100} height={100} alt='img' className='img'/>
              </div>
            <div className='mx-2'>
              <p>{selectedCountry.sub}</p>
            </div>
            </div>
          ) : (
            <div className='d-flex coun ' style={{alignItems:"center",height:"25px"}}>
            <div className='icon'>
             <Image src={nigeria} width={100} height={50} alt='img' className='img'/>
           </div>
         <div className='mx-2'  style={{alignItems:"center",height:"20px"}}>
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
      </div>
                </Form>

                </div>
            </div>
            <div className='exchange__fee'>

                <div className='bor mb-2'>
                    <p>Exchange fee (0.5%)</p>
                    <span>-#10.00</span>
                </div>
                <div>
                    <p>Amount well exchange</p>
                    <span>-#1999.00</span>
                </div>

            </div>

            <div className='mb-3'>
            <div className='d-flex justify-between mt-3 am'>
                    <p>Amount to recieve</p>
                </div>
                <div>
                <Form >
                <div className='d-flex form'>
              <Form.Control type="tel" onChange={handleChange} placeholder="#1,3333333" value= "$1.00" />

              <Dropdown className='phone__select w-80'>
        <Dropdown.Toggle variant="white" className='diva  dropdown d-flex p-3 border border-gry'  id="dropdown-basic">
          {secondselectedCountry ? (
            
            <div className='d-flex coun' style={{height:"20px"}}>
               <div className='icon '>
                <Image src={secondselectedCountry.icon} width={100} height={100} alt='img' className='img'/>
              </div>
            <div className='mx-2'>
              <p>{secondselectedCountry.sub}</p>
            </div>
            </div>
          ) : (
            <div className='d-flex coun ' style={{alignItems:"center",height:"25px"}}>
            <div className='icon'>
             <Image src={uk} width={100} height={50} alt='img' className='img'/>
           </div>
         <div className='mx-2'  style={{alignItems:"center",height:"20px"}}>
           <p>EUR</p>
         </div>
         </div>
           )}
        </Dropdown.Toggle>

        <Dropdown.Menu className='menu'>
          {list.map((options) => (
            <Dropdown.Item key={options.id}  onClick={() => handlesecondSelect(options)}  className='d-flex gap-4 coun'>
              <div className='icon'>
                <Image src={options.icon} width={100} height={100} alt='img' className='img'/>
              </div>
              <p>{options.sub}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      </div>
                </Form>

                </div>

            </div>

            <div className='exchange__fee2'>

                <div>
                    <p>Exchange rate </p>
                    <span>1 USD = 1,139.234 NGN</span>
                </div>
                

                </div>
          </div>
        </div>
           
          
        </div>
        <Button variant="primary" type="click" className='button mt-3' >
          Continue

      </Button>
        </div>
       

        
          {/* <div className='navv'>
          <Navbar/>

          </div> */}
       
      </div>
    </div>
  )
}
