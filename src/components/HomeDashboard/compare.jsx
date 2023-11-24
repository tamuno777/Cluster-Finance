import React,{useState} from 'react'
import "./index.css"
import { Form, Button, Dropdown } from 'react-bootstrap';
import { list } from '../../constant'
import Image from 'next/image';
import { nigeria,us } from '../../assets/images';

export default function Compare() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <div>
         <div className='mt-4 currency'>
            <h3 className='my-3'>COMPARE CURRENCY</h3>
            <article style={{alignItems:"center"}}>
              <Form>
              <div className='d-flex form'>
              <Form.Control type="tel" placeholder="#1,3333333" value= "$1.00" />

              <Dropdown className='phone__select w-80'>
        <Dropdown.Toggle variant="white" className='diva  dropdown d-flex p-3 border border-gry'  id="dropdown-basic">
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
                </article>

            <article className='mt-3'>
              <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className='d-flex form'>
              <Form.Control type="tel" placeholder="#1,3333333" value= "$1.00" />

              <Dropdown className='phone__select2 w-80'>
        <Dropdown.Toggle variant="white" className='diva dropdown d-flex w-100 p-3 border border-gry'  id="dropdown-basic">
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
             <Image src={us} width={100} height={50} alt='img' className='img'/>
           </div>
         <div className='mx-2'  style={{alignItems:"center",height:"20px"}}>
           <p>EUS</p>
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
              </Form.Group>
                </Form>
            </article>
        </div>
        
    </div>
  )
}
