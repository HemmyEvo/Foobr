import React, { useEffect } from 'react'


const About = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
      }, [])

      const info = [
        {
            label:'Reliable Service',
            text:'We understand the critical nature of timely deliveries in today’s fast-paced world. With our team of experienced dispatch riders, we guarantee prompt and secure delivery of your packages, documents, and parcels.'
        },
        {
            label:'Customer Satisfaction',
            text:'Our commitment to customer satisfaction is unwavering. We strive to make every delivery experience seamless and hassle-free for both you and your customers. By choosing our services, you can enhance your reputation and build trust with your clientele.'
        },
        {
            label:'Efficiency and Speed',
            text:'Time is of the essence in the delivery business. Our dispatch riders are trained to optimize routes and ensure swift deliveries without compromising safety. Whether it’s a local delivery or a rush order, we are equipped to handle it with efficiency and speed.'
        },
        {
            label:'Advanced Technology',
            text:'We leverage advanced technology to streamline our operations and provide real-time tracking of deliveries. You can monitor the progress of your deliveries and receive instant updates, giving you peace of mind.'
        },
        {
            label:'Professionalism',
            text:'Our dispatch riders are not just delivery agents; they are representatives of your brand. They are trained professionals who uphold the highest standards of professionalism and courtesy at all times.'
        }

      ]
  return (
    <>
      <section className="overflow-hidden pt-10 ">
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold text-[#004A4D] sm:text-[40px]/[48px] text-center pb-5'>About Us</h1>
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className=" px-3 sm:px-4 xl:w-1/2 mx-auto ">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  lg:w-1/2 mx-auto text-center pt-20 px-4 ">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                {info.map((list,i)=>
                <div className='md:flex md:justify-between md:space-x-10 items-center' key={i}>
                      <h2 className="mb-2 flex-1 font-bold text-[#004A4D] text-xl ">
                      {list.label}
                    </h2>
                  
                    <p className="mb-8 glass-effect p-4 max-w-[500px]">
                      {list.text}
                    </p>
                </div>
                )}
      
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About