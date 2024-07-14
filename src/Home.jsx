import React, { useEffect } from 'react'
import { BsArrowRight, BsDoorOpen } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BiCheck, BiPhone } from 'react-icons/bi'
import { PiCaretUpBold,PiMotorcycle } from 'react-icons/pi'


const Home = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
  }, [])

  const OrderNotes = [
    {
      Label:'place your order',
      Text: 'Simply browse our website to find what you need, add your chosen items to the cart, and complete the easy checkout process. Your order is just a few clicks away ',
      icon: <BiPhone />
    },
    {
      Label:'we confirm your order',
      Text: 'Once you\'ve placed your order, we\'ll send you a confirmation email or notification with all the details, including the estimated delivery time and tracking information. Rest assured, your order is on it\'s way !',
      icon: <BiCheck />,
    },
    {
      Label:'our riders pick up your order',
      Text: 'Our professional riders will promptly pick up your items from the store. They ensure evrything is handled with care accuracy, so you get exactly what you ordered',
      icon: <PiMotorcycle />
    },
    {
      Label:'your order is delivered right at your doorstep',
      Text: 'Finally, our riders will bring your order straight to your door, You can track the delivery in real-time and expect a timely, safe, and hassle-free experience. Enjoy your purchase without leaving the comfort of your hostel',
      icon: <BsDoorOpen/>
    },
  ]

  const restaurant = [
    {
      image:'../src/Asset/Chicken republic- edited icon.svg',
      label:'Chicken Republic'
    },
    {
      image:'../src/Asset/Item 7 edited.svg',
      label:'Item 7'
    },
    {
      image:'../src/Asset/Perozona.svg',
      label:'Perozona'
    },
    {
      image:'../src/Asset/Bitemore-icon.svg',
      label:'Bitemore'
    },
    {
      image:'../src/Asset/Brent-icon.svg',
      label:'Brent'
    },
    {
      image:'../src/Asset/Danjuma.svg',
      label:'Danjuma'
    },
  ]
  return (
    <div>
       

       <main className='font-[sans-serif]'>
        
        <div className="section1-cont mt-10 ">
          <div className="section1-wrap max-w-[1180px] flex flex-col justify-center items-center mx-auto ">
            <p className='font-bold max-[369px]:text-xs '>Delicious Meals, Delivered to Your Door</p>
            <h1 className='font-bold max-[276px]:text-[20px] max-[369px]:text-[30px] text-[40px] md:text-[60px]  text-gray-800'>Order online today!</h1>
            <p className='max-w-[38rem] max-[369px]:text-sm  md:text-[18px]  mt-6 text-[#3b3b3b] text-center'>Welcome to Foobr, a premier food delivery service that brings delicious meals right to your doorstep. We make it easy for you to order online and customize your menu options to fit your taste buds. Our team of professionals works hard to ensure that each meal is prepared with the utmost care and quality, so you can enjoy a satisfying and tasty meal every time.</p>
            <div className="btn md:space-x-8 md:space-y-0 space-y-2 md:flex-row mt-5 flex flex-col">
            <Link to={'/restaurant'}><button className='px-4 py-2 text-white font-bold bg-[#004A4D] rounded-full flex items-center'> Order Now <BsArrowRight className='ml-2 font-bold text-[20px]'/> </button></Link>
              <button className='px-4 py-2 hover:bg-[#004A4D] text-white font-bold bg-[#69727d] rounded-full'>Sign Up</button>
            </div>
          </div>

        </div>

        <div className="section2-cont overflow-hidden pt-28">
          <h1 className='font-bold text-center max-[276px]:text-[20px] max-[369px]:text-[30px] text-[30px] md:text-[50px] pb-20  text-gray-800'>What you need to do</h1>
          <div className="section2-wrap max-w-[1180px]   grid md:grid-cols-2 justify-center items-center mx-auto ">

            <div className="video-cont relative   max-h-[100vh] md:mb-0 mb-10">
              <div className="video-wrap mx-auto before:right-[50%] before:translate-x-[50%] before:absolute before:rounded-full before:shadow-2xl shadow-2xl before:shadow-[#65e991] shadow-[#29683e] before:bg-[#004A4D] before:h-[400px]  before:-z-[1] before:w-[400px] overflow-hidden w-fit rounded-[35px]">
              <video  autoPlay loop  width={200} >
                  <source src="../src/Asset/MockUp.webm" type='video/webm'/>
                  Your browser does not support the video
              </video>
              </div>
                
            </div>

            <div className="timeline px-10">

<ol className="relative border-s border-gray-200 dark:border-gray-700">    

    {OrderNotes.map((list,i) =>(
          <li key={i} className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-gray-900  text-white bg-[#004A4D] ">
             <p>{list.icon}</p>
          </span>
          <h3 className="flex capitalize text-[#004A4D] items-start mb-1 text-lg font-semibold "><p>{list.Label}</p></h3>
         
          <p className="mb-4 text-base font-normal text-gray-500 ">{list.Text} </p>
          
      </li>
    ))}              

</ol>



            </div>
          </div>

        </div>


        <div className="section3-cont  pt-10">
          <div className="section3-wrap py-10 max-w-[1180px] px-8 glass-effect justify-center items-center mx-auto ">
            <h1 className='font-bold text-center capitalize md:text-[25px]  text-gray-800  pb-10'>Enjoy Delicious meals from restaurant around you</h1>

      <div className="container overflow-hidden  max-w-[1000px]  relative">
      <div 
      className="cards grid grid-cols-2   sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-[repeat(6,auto)]  gap-[10px]"
      >

        {restaurant.map((list, i)=>(
              <div key={i} className="card rounded-xl glass-effect space-y-4 p-5 items-center justify-center flex flex-col">
                <div className="card-image w-10 h-10   sm:w-20 sm:h-20 flex ">
                <img src={list.image} className='w-full  h-full object-cover object-center' alt="" />
                </div>
             
             
              <h1 className=' sm:whitespace-nowrap text-center'>{list.label}</h1>
           
          </div>
        ))}



        </div>
      </div>
          </div>

        </div>

        

        <div className="section3-cont pt-40 ">
          <h1 className='font-bold text-center max-[276px]:text-[20px] max-[369px]:text-[30px] text-[30px] md:text-[50px]  text-gray-800  pb-10'>What Our Client Says</h1>
          <section>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-5  md:grid-cols-3">


            <div className="flex glass-effect rounded-[20px] p-7 flex-col w-full max-w-lg text-center mx-auto">
                <img  className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full" />
                <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
          Wicked Labs
          <span href="#" className="font-semibold text-gray-200 lg:mb-0">Acme's HR </span>
                </h2>
            </div>


            <div className="flex glass-effect rounded-[20px] p-7 flex-col w-full max-w-lg text-center mx-auto">
                <img  className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full" />
                <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
          Wicked Labs
          <span href="#" className="font-semibold text-gray-200 lg:mb-0">Acme's HR </span>
                </h2>
            </div>

            
            <div className="flex glass-effect rounded-[20px] p-7 flex-col w-full max-w-lg text-center mx-auto">
                <img  className="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full" />
                <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
          Wicked Labs
          <span href="#" className="font-semibold text-gray-200 lg:mb-0">Acme's HR </span>
                </h2>
            </div>


        </div>
    </div>
</section>
        </div>


        <div className="section4-cont pt-10 ">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Frequently asked questions</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    <div className="mx-auto flex max-w-screen-sm flex-col border-t">
      {/* <!-- question - start --> */}
      <div className="border-b">
        <div className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600">
          <span className="font-semibold transition duration-100 md:text-lg">How does the product work?</span>

          <span ><PiCaretUpBold className='text-indigo-500  text-[23px]' /></span>
        </div>

        <p className="mb-4 hidden text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
      </div>
      {/* <!-- question - end --> */}




 
    </div>
  </div>
        </div>

       </main>

    </div>
  
  )
}

export default Home
