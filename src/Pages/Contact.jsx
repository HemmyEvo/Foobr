import React, { useEffect } from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
      }, [])

  return (
<div class="mt-6 px-5">
            <div class="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl glass-effect rounded-md font-[sans-serif]">
                <div>
                    <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                    <p class="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                    <div class="mt-12">
                        <h2 class="text-gray-800 text-base font-bold">Email</h2>
                        <ul class="mt-4">
                            <li class="flex items-center">
                                <div class=" text-[#007bff] glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                   <MdEmail/>
                                </div>
                                <a  class="text-[#007bff] text-sm ml-4">
                                    <small class="block">Mail</small>
                                    <strong>info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-12">
                        <h2 class="text-gray-800 text-base font-bold">Socials</h2>

                        <ul class="flex mt-4 space-x-4">
                            <li class="cursor-pointer glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a className='text-[#007bff] text-[20px]'>
                                    <FiFacebook/>
                                </a>
                            </li>
                            <li class="cursor-pointer glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a  className='text-[#007bff] text-[20px]'>
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li class="cursor-pointer glass-effect h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a  className='text-[#007bff] text-[20px]'>
                                 <BsInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form class="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full  glass-effect text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none" />
                    <input type='email' placeholder='Email'
                        class="w-full glass-effect text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none" />
                    <input type='text' placeholder='Subject'
                        class="w-full glass-effect text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full text-gray-800 glass-effect rounded-md px-4 border text-sm pt-2.5 outline-none"></textarea>
                    <button type='button'
                        class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                </form>
            </div>
        </div>
  )
}

export default Contact