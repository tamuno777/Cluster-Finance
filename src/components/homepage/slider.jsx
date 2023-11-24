"use client"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { crossborder, money, realtime } from '../../assets/images/index';
import "./homepage.css"

function Slider() {
  return (
    <Carousel style={{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>
      <Carousel.Item style={{backgroundColor:"white"}}>
        <div  className='slider__img'>
        <Image src={crossborder} width={100} height={100} alt='realtime' />

        </div>
        <Carousel.Caption className='text__div'>
          <h3 className='header'>Cross-boarder Money Transfer</h3>
          <p className='sub__header'>Transfer money internationally with ease.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"white"}}>
        <div  className='slider__img'>
        <Image src={realtime} width={100} height={100} alt='realtime' />

        </div>
        <Carousel.Caption className='text__div'>
          <h3 className='header'>Real-time Exchange Rate Information</h3>
          <p className='sub__header'>Know the value of your money in real time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"white"}}>
        <div  className='slider__img mb-5'>
        <Image src={money} width={100} height={100} alt='realtime' />

        </div>
        <Carousel.Caption className='text__div mt-5'>
          <h3 className='header'>Quick Delivery of Funds</h3>
          <p className='sub__header'>
          Receive payments in minutes with low transaction fees
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;