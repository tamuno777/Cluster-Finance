"use client"
import React,{useState} from 'react'
import "./index.css"
import { Form, Button,Dropdown } from 'react-bootstrap';
import { list } from '../../constant'
import Link from 'next/link'
import Compare from './compare';
import Navbar from '../../sharedlayout/nav';
import Image from 'next/image';
import { nigeria,bell, eye, bank, add, arrow, round } from '../../assets/images';
export default function HomeDashboard() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div className='section'>
      <div className='container-div'>
        <div className='info'>

        
        <div className='first-flex'>
          <div className='d-flex tt' style={{alignItems:"center"}}>
          <p>JD</p>
          <h3 className='mx-3'>Hey John Doe</h3>

          </div>
          <Image src={bell} width={100} height={100} alt='img' className='img1'/>

          
        </div>

        <div>
          <article  className='second-flex' style={{alignItems:"center"}}>
            <Form>
            <Dropdown className='phone__select '>
        <Dropdown.Toggle variant="white" className='diva2 dropdown2 d-flex p-3 border'  id="dropdown-basic">
          {selectedCountry ? (
            
            <div className='d-flex ' style={{height:"20px",backgroundColor:""}}>
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
        <div>
              1234566788
            </div>
          </article>

          <article  className='third-flex my-2' style={{alignItems:"center"}}>
            <h3>#2000.<span>00</span></h3>
            <div>
              <p>
              <Image src={eye} width={100} height={100} alt='img' className='img1 me-1'/>
                 Balance</p>
            </div>
          </article>

          <article  className='fourth-flex'>
            <Link href="/Bank" >
            <button>
              <Image src={bank} width={100} height={100} alt='img' className='inside'/>
            </button>
            <p>Bank</p>
              
            </Link>
            <Link href="" className='ms-5 me-4'>
            <button>
            <Image src={add} width={100} height={100} alt='img' className='inside'/>

            </button>
            <p>Add</p>
              
            </Link>
            <div className='ms-4 me-5'>
            <button> 
            <Image src={arrow} width={100} height={100} alt='img' className='inside'/>

               </button>
            <p>Transfer</p>
              
            </div>
            <Link href="/Exchange">
            <button>
            <Image src={round} width={100} height={100} alt='img' className='inside'/>

            </button>
            <p>Exchange</p>
              
            </Link>
            
            <div>
            </div>
          </article>
          <article className='text-end'>
            <Link href="/History" className='linke'> Transaction History <span> &gt; </span></Link>
          </article>
        </div>
        </div>

          <div>
            <Compare/>
          </div>
          <div>
          <Navbar/>

          </div>
       
      </div>
    </div>
  )
}
