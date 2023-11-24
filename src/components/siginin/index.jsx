"use client"
import React,{useState} from 'react'
import "./index.css"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import PasswordVerification from './phoneverification';
import { InputGroup, FormControl } from 'react-bootstrap';
import { eye } from '../../assets/images';
import Image from 'next/image';



export default function Siginin() {
    const [loadComponent, setLoadComponent] = useState(false);

    const handleClick = () => {
      setLoadComponent(true);
    };
    const handlelogin = () => {

    }
  return (
    <div className='section'>
        <div className="section2">
        {!loadComponent ? (

              
            <div>
                <h2 >Welcome Back!!</h2>

                <div>


        <>
        
        <Form className='form2' >

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Email address</Form.Label>
        <Form.Control type="email" size="lg" required placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className='mb-2' controlId="password">
        <Form.Label className='label'>Password</Form.Label>
        <InputGroup  className='mb-2' controlId="password">

    
<FormControl
    placeholder="Enter password"
    aria-describedby="inputGroupPrepend"
  required
  className='inpute'
  // value={password}
  // onChange={handlePasswordChange}
  size='lg'
    type="password"
/>
  <InputGroup.Text id="inputGroupPrepend" className='bg-white'>
  <Image src={eye} alt="placeholder" width={20} height={20} />
</InputGroup.Text>
</InputGroup>
      </Form.Group>
            <p ><Link href="/forgot" className='btnlink text-primary'  > Forgot password?</Link></p>


            <Button onClick={handleClick}   className='button mt-5 d-flex'  variant="primary"> 
             {/* <Link href="/register" className='link2'>  */}
             Login 
             {/* </Link>  */}
             </Button>{' '}

             <p className='text-center'>Dont have an account?<Link href="/register" variant="primary"> Create account</Link></p>
            </Form> 

  </>

                </div>
            </div>
              ) : (
                <PasswordVerification />
              )}
        </div>
    </div>
  )
}
