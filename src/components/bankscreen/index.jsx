"use client"
import React,{useState} from 'react'
import "./index.css"
import { Form, Button, Dropdown } from 'react-bootstrap';
import { list } from '../../constant'
import Link from 'next/link'
import Accountdetails from './Accountdetails';
import Navbar from '../../sharedlayout/nav';
import Image from 'next/image';
import { nigeria,copy, eye, bank, add, arrow, round } from '../../assets/images';

export default function Bankscreen() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div className='section'>
      <div className='container__div'>
        <div className='info'>

        
        <div className='first-flex'>
          <Link href="/HomeDashboard">
          &larr; <span>Bank</span>
          </Link>
        </div>

        <div>
          <article  className='second-flex'>
            <Form>
            <Dropdown className='phone__select w-100'>
        <Dropdown.Toggle variant="white" className='diva2 dropdown2 d-flex p-3 border border-gry'  id="dropdown-basic">
          {selectedCountry ? (
            
            <div className='d-flex coun' style={{height:"20px",backgroundColor:"gainsboro"}}>
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
           <p>Nigeria NGN</p>
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
              <p><span>{options.headerText}</span>{options.sub}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
        </Form>
        
          </article>

          <article  className='d-block ava'>
          <h3>AVAILABLE BALANCE</h3>

            <h2>#2000.<span>00</span></h2>
            
          </article>

          <div  className='fourth'>
           
          <Link href="" className=''>
            <button>
            <Image src={add} width={100} height={100} className='inside'/>

            </button>
            <p>Add</p>
              
            </Link>
            <div className='arrow'>
            <button> 
            <Image src={arrow} width={100} height={100} className='inside'/>

               </button>
            <p>Transfer</p>
              
            </div>
            <Link href="/Exchange">
            <button>
            <Image src={round} width={100} height={100} className='inside'/>

            </button>
            <p>Exchange</p>
              
            </Link>
            
            <div>
            </div>
          </div>
          
        </div>
        </div>

          <div>
            <Accountdetails/>
          </div>
          <div>
          <Navbar/>

          </div>
       
      </div>
    </div>
  )
}
