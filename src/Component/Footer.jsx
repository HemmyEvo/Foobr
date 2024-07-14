import React from 'react'
import { BsDiscord, BsDribbble, BsFacebook, BsGithub, BsTwitter, BsTwitterX, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    const icon = [
        {
            path:'',
            icon:<BsFacebook />
        },
        {
            path:'',
            icon:<BsDiscord />
        },
        {
            path:'',
            icon: <BsTwitterX />
        },
        {
            path:'',
            icon: <BsGithub />
        },
        {
            path:'',
            icon:  <BsWhatsapp />
        },
    ]
  return (
    <>
    
<div className="py-20">
<div className="bg-white absolute bottom-0 left-0 right-0 dark:bg-gray-900">
    <div className="mx-auto w-full   p-1">
   
      <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <div className="md:flex space-y-6 md:space-y-0 justify-center md:px-10 items-center w-full  md:items-center md:justify-between">
          <p className="text-sm text-gray-500 text-center  dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Foobr™</a>. All Rights Reserved.
          </p>

          <div className="flex mt-4 justify-center space-x-5 sm:mt-0">
            {icon.map((list,i) =>  <a key={i} href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
               {list.icon}
              </a> )}
              
          </div>
      </div>
    </div>
</div>

</div>


    </>
  )
}

export default Footer
