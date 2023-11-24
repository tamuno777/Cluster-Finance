"use client"
import React from 'react'
import "./index.css"
import { Form, Button, Alert } from 'react-bootstrap';
import { list } from '../../constant'
import Link from 'next/link'
import Navbar from '../../sharedlayout/nav';
import Image from 'next/image';
import { filter } from '../../assets/images';

export default function History() {
  return (
    <div className='section'>
      <div className='container__div'>
        <div className='info pb-5'>

        
        <div className='first d-flex ' style={{justifyContent:"space-between"}}>
           <span>Transaction history</span>
           <p ><span className='me-2'>
            <Image src={filter} height={15} width={20} alt='alt'/>
            
            </span>Filter</p>

        </div>

        <div>
        <div className='mt-4 currency'>
            
            <article>
             <div className='bank__div'>
             <div>
                <div>
                  <p>Money Exchange</p>
                  <sub>Nov 21st 13:11</sub>

                </div>

              </div>
              <div>
                  <p>NGN - USD</p>
                  <span className='text-success'>Successful</span>
                </div>
                <div>
                  <p>
                    -#2000
                  </p>
                </div>

              </div>

             <div className='bank__div'>
             <div>
                <div>
                  <p>Money Transfer</p>
                  <sub>Nov 21st 13:11</sub>

                </div>

              </div>
              <div>
                  <p>NGN - USD</p>
                  <span className='text-success'>Successful</span>
                </div>
                <div>
                  <p>
                    -#2000
                  </p>
                </div>

              </div>
             <div className='bank__div'>
             <div>
                <div>
                  <p>Money Exchange</p>
                  <sub>Nov 21st 13:11</sub>

                </div>

              </div>
              <div>
                  <p>NGN - USD</p>
                  <span className='text-success'>Successful</span>
                </div>
                <div>
                  <p>
                    -#2000
                  </p>
                </div>

              </div>
             
            </article>
        </div>
           
          
        </div>
        </div>

        
          <div className='navv'>
          <Navbar/>

          </div>
       
      </div>
    </div>
  )
}
