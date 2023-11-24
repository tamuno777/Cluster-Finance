import React from 'react'
import "./index.css"
import { Form, Button, Alert } from 'react-bootstrap';
import { list } from '../../constant'
import Image from 'next/image';
import { copy } from '../../assets/images';


export default function Accountdetails() {
  return (
    <div>
         <div className='mt-4 currency'>
            <h3 className=''>Your NGN bank account details</h3>
            
            <article>
             <div className='bank__div'>
             <div>
                <sub>Account Holder</sub>
                <p>John doe</p>
              </div>
              <button>
            <Image src={copy} width={100} height={100 } alt='img' className='copy'/>

            </button>             </div>
             <div className='bank__div'>
             <div>
                <sub>Account Number</sub>
                <p>81 2342 2345</p>
              </div>
              <button>
            <Image src={copy} width={100} height={100} alt='img' className='copy'/>

            </button>
             </div>
            
             <div  className='bank__div'>
             <div>
                <sub>Bank Name</sub>
                <p>Access bank</p>
              </div>
              <button>
            <Image src={copy} width={100} height={100} alt='img' className='copy'/>

            </button>
             </div>
             
            </article>
        </div>
        
    </div>
  )
}
