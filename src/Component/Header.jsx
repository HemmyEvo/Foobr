import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoCloseCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);
 

    const HandleToggle = () =>{

        if(!toggle){
            setToggle(true)
        }
        else{
            setToggle(false)
        }
    
    }
    
    const Links = [
        {
            label:'Home',
            path:'/'
    	},
        {
            label:'About',
            path:'/about'
    	},
        {
            label:'Service',
            path:'/service'
    	},
        {
            label:'Restaurant',
            path:'/restaurant'
    	},
        {
            label:'Contact',
            path:'/contact'
    	},
    ]


  return (
    <>

 <div className="relative h-20">
<nav className="bg-white fixed top-0 right-0 left-0  z-40 border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a className="flex items-center space-x-3 rtl:space-x-reverse">   
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Foobr</span>
  </a>

  
  <div className="flex items-center  md:order-2 space-x-10 md:space-x-0 rtl:space-x-reverse">


  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>


     

    

      <button type="button" className='relative inline-flex  items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' onClick={()=>HandleToggle()} >
       <BiMenu className={`absolute  ${!toggle ?'opacity-100' :''} opacity-0 transition delay-100 duration-200 text-2xl`}/>
       <IoCloseCircle className={`absolute  ${!toggle ?'opacity-0' : ''} opactiy-100 transition delay-100 duration-200 text-2xl`}/>
    </button>
  </div>
  
  <div className={`items-center justify-between hidden md:flex w-auto order-1`} id="navbar-user">
    <ul className="flex  font-medium p-0   border-gray-100 rounded-lg space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-white dark:bg-gray-900 dark:border-gray-700">
      {/* <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li> */}

      {Links.map((link,i)=>(
        <li key={i}>
        <Link to={link.path} className="block  text-gray-900 rounded hover:bg-transparent hover:text-blue-700 p-0 dark:text-white  dark:hover:text-blue-500 dark:hover:bg-transparent dark:border-gray-700">{link.label}</Link>
      </li>
      ))}
      
    </ul>
  </div>

      {/* mobile */}

      <div className={`absolute top-14 z-40 right-0 items-center justify-between md:hidden    ${!toggle ? 'translate-x-64' :'translate-x-0 '}  transition-transform duration-500 delay-200 `} >
        
    <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100  bg-gray-50  rtl:space-x-reverse   dark:bg-gray-800  dark:border-gray-700">
      {/* <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li> */}

      {Links.map((link,i)=>(
        <li key={i}>
        <Link to={link.path} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">{link.label}</Link>
      </li>
      ))}
      
    </ul>
  </div>


  </div>
</nav>
</div>   


    
    </>
  )
}

export default Header