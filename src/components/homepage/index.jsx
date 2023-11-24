import React from 'react'
import "./homepage.css"
import  Slider  from './slider'
import Button from "react-bootstrap/Button"
import Link from 'next/link'

export default function Welcomepage() {
  return (
    <div className='main'>
        <Slider/>
        <div style={{width:"40%",display:"flex",flexDirection:'column',gap:"20px"}} className='div'>
          <div className="header py-5" style={{lineHeight:'55px'}}>Welcome to Cluster Finance</div>
        <Button className='button' variant="primary">
          <Link href="/register" className='link2'>
          Create new account
          </Link>
          </Button>{' '}

          <Link className='link' href="/Login">
            Login
          </Link>
        </div>
        
        
    </div>
  )
}
