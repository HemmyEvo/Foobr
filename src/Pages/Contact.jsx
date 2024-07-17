import React, { useEffect } from 'react'
import {  BsInstagram } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
      }, [])

  return (
<div className="mt-6 px-5">
            <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl glass-effect rounded-md font-[sans-serif]">
                <div>
                    <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className=" text-[#007bff] glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                   <MdEmail/>
                                </div>
                                <a  className="text-[#007bff] text-sm ml-4">
                                    <small className="block">Mail</small>
                                    <strong>info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className="cursor-pointer glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a className='text-[#007bff] text-[20px]'>
                                    <FiFacebook/>
                                </a>
                            </li>
                            <li className="cursor-pointer glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a  className='text-[#007bff] text-[20px]'>
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li className="cursor-pointer glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a  className='text-[#007bff] text-[20px]'>
                                 <BsInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full  glass-effect text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none" />
                    <input type='email' placeholder='Email'
                        className="w-full glass-effect text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none" />
                    <input type='text' placeholder='Subject'
                        className="w-full glass-effect text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full text-gray-800 glass-effect rounded-md px-4 border text-sm pt-2.5 outline-none"></textarea>
                    <button type='button'
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                </form>
            </div>
        </div>
  )
}

export default Contact