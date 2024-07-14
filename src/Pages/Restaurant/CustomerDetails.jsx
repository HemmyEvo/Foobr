import React from 'react'

const CustomerDetails = () => {
  return (
    <div className="flex justify-center px-10">
        <form className='glass-effect rounded-md space-y-8 items-center flex flex-col p-8' action="">
            <h1 className='text-2xl text-[#004A4D] font-bold'>Users Details</h1>
            <div className="name grid">
                <label htmlFor="name">Full name</label>
                <input className='py-2 px-3 glass-effect focus:shadow-inner outline-none'  type="text" name="username" id="name" />
            </div>
            <div className="number grid">
                <label htmlFor="number">Phone number</label>
                <input className='py-2 px-3 glass-effect focus:shadow-inner outline-none' type="text" name="number" id="number" />
            </div>
            <div className="address grid">
                <label htmlFor="address">Delivery Address</label>
                <input className='py-2 text-[glass-effect] px-3 glass-effect focus:shadow-inner outline-none' type="text" name="address" id="address" />
            </div>
            <div className="button flex space-x-4 ">
            <button className='px-8 py-2 hover:bg-[#004A4D] text-white font-bold bg-[#69727d] rounded-full'>Order</button>
            
            <button className='px-8 py-2 text-white font-bold bg-[#cc4117] rounded-full' type="reset">Reset</button>
            </div>
            
           


        </form>
    </div>

  )
}

export default CustomerDetails