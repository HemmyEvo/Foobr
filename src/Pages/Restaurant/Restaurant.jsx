
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  'react-toastify/dist/ReactToastify.css'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { IoLocation } from 'react-icons/io5'
import { FaMotorcycle } from 'react-icons/fa6'
const Restaurant = () => {
    const restaurant = [
        {
            name: 'Danjuma',
            image:'../Asset/danjuma.jpg',
            price: 300,
            location:'Isale General, Ogbomosho',
            status:'Unavailabl'
        },
        {
            name: 'Item 7(Go)',
            image:'../Asset/item_7.jpg',
            price: 300,
            location:'Sabo, Ogbomosho',
            status:'Unavailabl'
        },
        {
            name: 'Lagos Kitchen',
            image:'../Asset/lagos_kitchen.jpg',
            price:400,
            location:'Under G area, Ogbomosho',
            status:'Unavailabl'
        },
        {
            name: 'Alice\'s Place',
            image:'../Asset/alata_milk_honey.jpg',
            price:400,
            location:'Stadium road, Ogbomoso',
            status:'Unavailabl'
        },
        {
            name: 'Bitemore',
            image:'../Asset/alata_milk_honey.jpg',
            price: 500,
            location:'Takie, Ogbomosho',
            status:'Unavailabl'
        },
        {
            name: 'Brent',
            image:'../Asset/alata_milk_honey.jpg',
            price: 500,
            location:'Takie, Ogbomosho',
            status:'Unavailabl'
            
        },
        {
            name: 'Alata Milk and Honey',
            image:'../Asset/alata_milk_honey.jpg',
            price: 400,
            location:'Under G area, Ogbomosho',
            status:'Unavailable'
            
            
        },
    ]
    useEffect(() =>{
        window.scrollTo(0,0)
      }, [])
      
  return (
   <>
 

       {/* <Header /> */}
   <div className="wrap glass-effect rounded-[20px] p-2 max-w-[1000px] font-[sans-serif]'  space-y-10 mx-auto">
    <h1 className='text-center text-[27px] font-semibold'>Select Restaurant of your choice</h1>
   <div className="restaurant-grid grid lg:grid-cols-3 md:grid-cols-2 gap-10 items-center justify-center">
        {restaurant.map((list,i)=>(
 
            <Link key={i} to={list.status === 'Unavailable' ? '#' : `/${list.name}`} >
            <div   className="card glass-effect rounded-md cursor-pointer space-y-4 shadow-lg hover:shadow-2xl p-6  relative  ">
                <h1 className='font-semibold text-[20px] text-[#004A4D] '>{list.name}</h1>
                
                
                <div className="img-cont relative w-full h-60 overflow-hidden">
                {list.status === 'Unavailable' ? <div className="overlay absolute top-0 bottom-0 left-0 right-0 bg-[#00000096] flex justify-center items-center text-[white] text-[25px]"> Unavailable</div> : ''}
                <img src={list.image} className='h-full w-full bg-clip-content object-cover object-center' alt="" />
                </div>
                <h1 className='flex justify-end items-center space-x-4 text-[15px]'><span><IoLocation className='text-[20px]' /></span><span className='text-[15px] tracking-widest text-[gray] italic' >{list.location}</span></h1>
               <div className=' justify-end flex items-center  '><h1 className='flex space-x-4 text-[#f08080] items-center bg-[#fef1f1]  p-2 rounded-lg'><span className='text-[20px]'><FaMotorcycle /></span> <span className='italic'>From ₦{(list.price).toFixed(2)}</span></h1></div>
                
            </div>
            </Link>
    
             
        ))}
    </div>
   </div>
   

   
   </>
  )
}

export default Restaurant