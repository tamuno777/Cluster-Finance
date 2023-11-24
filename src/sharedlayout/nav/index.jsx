import React from 'react'
import "./index.css"
import Link from 'next/link'
import Image from 'next/image'
import { stock,home,card,settings } from '../../assets/images'
export default function Navbar() {
  return (
    <div className='section__div mt-4' >
        <div className='butoon__group'>
            <Link href="/HomeDashboard" className='link'>
            <Image src={home} width={100} height={50} alt='img' className='img'/>
                <p>Home</p>
            </Link>
            <Link href="" className='link'>
            <Image src={card} width={100} height={50} alt='img' className='img'/>
                <p>Card</p>
            </Link>
            <Link href="/History" className='link'>
            <Image src={stock} width={100} height={50} alt='img' className='img'/>
                <p>History</p>
            </Link>
            <Link href="#" className='link'>
            <Image src={settings} width={100} height={50} alt='img' className='img'/>
                <p>Setttings</p>
            </Link>
     </div>

    </div>
  )
}
