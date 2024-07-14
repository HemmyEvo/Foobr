import React, { useEffect, useState } from 'react'
import { BiCaretDownCircle, BiCaretUpCircle,BiCheck,BiMoney } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { FcCollapse } from 'react-icons/fc'
import { toast, ToastContainer } from 'react-toastify'
import  'react-toastify/dist/ReactToastify.css'
import { MdDeleteForever } from 'react-icons/md'
import useLocalStorage from '../../Utilities/useLocalStorage'

const Info = () => {
  const [toggle, setToggle] = useState({});
  const [checkedItems, SetCheckedItems] = useState({})
  const [quantities, SetQuantites] = useState({})
  const [cart, SetCart] = useState([])
  const [orderNumber, SetOrderNumber] = useState('')

  const details ={
    'Danjuma' :
      {
      'Drink': [
        {
        label:'Chivita',
        price:400,
        status:'available'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'available'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'available'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'available'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'available'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'available'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
      },
  
      

    'Bitemore' :
      {
        name:'Bitemore',
        
      'Drink': [
        {
        label:'Chivita',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'Currently unavailable'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'Currently unavailable'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
      },

   

    'Alice\'s Place' :
      {
        
        
      'Drink': [
        {
        label:'Chivita',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'Currently unavailable'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'Currently unavailable'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
      },
  
      

    'Item 7(Go)': 
    {
  
      
      'Drink': [
        {
        label:'Chivita',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'Currently unavailable'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'Currently unavailable'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
    },
    


    'Lagos Kitchen': 
    {
      
      
      'Drink': [
        {
        label:'Chivita',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'Currently unavailable'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'Currently unavailable'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
    },
  
    

    'Alata Milk and Honey': 
    {
      
      'Drink': [
        {
        label:'Chivita',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'Currently unavailable'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'Currently unavailable'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
    },
  
    

    'Brent': 
    {
      
      'Drink': [
        {
        label:'Chivita',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Favrouz',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Coffee',
        price:200,
        status:'Currently unavailable'
      
        },
      ],

      'Extras': [
        {
        label:'Extra beef',
        price:200,
        status:'Currently unavailable'
        
        },

        {
        label:'Extra rice',
        price:200,
        status:'Currently unavailable'
      
        },

        {label:'Extra chicken',
        price:200,
        status:'Currently unavailable'
      
        },


        {
        label:'Extra fish',
        price:200,
        status:'Currently unavailable'
        },

      ],
      
      'Main meal':[
        {
        label:'Fried rice ONLY and beef with extra rice',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Fried rice ONLY and chicken with extra rice',
        price:200,
        status:'Currently unavailable'
        },
      ],

      'Sides':[
        {
        label:'Chicken Shawarma',
        price:200,
        status:'Currently unavailable'
        },
        {
        label:'Coleslaw',
        price:200,
        status:'Currently unavailable'
        },
        
        {
        label:'Beef Shawarma',
        price:200,
        status:'Currently unavailable'
        },
      ]
    },
 
    

  }



  useEffect(() =>{
    window.scrollTo(0,0)
  }, [])


  const {id} = useParams()
  const detail = details[id]



  const HandleToggle = (i) =>{

   
        setToggle((prevToggles) => ({
          ...prevToggles,
          [i]: !prevToggles[i]
        }))

}



const HandleCheck = (cartegory,items) =>{
  const uniqueId = `${cartegory}-${items.label}`
  SetCheckedItems(prev => ({
      ...prev,[uniqueId] : !prev[uniqueId]
}))

if(!checkedItems[uniqueId]){
  notify()
}
else{
  toast.error('Removed!!!',{
    position : 'top-right'
 
  })
}

SetCart(prev =>{
  const newCart = {...prev};
  if(!newCart[cartegory]){
    newCart[cartegory] = []
  }

    if(!checkedItems[uniqueId]){
      
    const existItems = newCart[cartegory].findIndex(cart => cart.label === items.label);
    if(existItems >= 0){
      newCart[cartegory][existItems].quantity  = (quantities[uniqueId] || 1);
      
    
    }
    else{
      newCart[cartegory].push({...items, quantity:(quantities[uniqueId] || 1)})
     
     };
     
    }


    else{
      newCart[cartegory] = newCart[cartegory].filter((cart) => cart.label !== items.label )
      
    }

    if(newCart[cartegory].length === 0){
      delete newCart[cartegory]
    }


 
 


    return newCart
})

}

const HandleQuantity = (uniqueId, value) =>{
  SetQuantites(prev => ({

      ...prev,[uniqueId]: value
    
  
}))
}
const HandleRemove = (cartegory, items) =>{
  
  toast.error('Removed!!!',{
    position : 'top-right'
 
  })
    const uniqueId = `${cartegory}-${items.label}`
  SetCart(prev =>{
    const newCart = {...prev};

    newCart[cartegory] = newCart[cartegory].filter((cart) => cart.label !== items.label )
    if(newCart[cartegory].length === 0){
      delete newCart[cartegory]
    }
  
  
      return newCart
  })
  SetCheckedItems(prev => ({
    ...prev,[uniqueId] : !prev[uniqueId]
}))
  

}

const AddToCart = (cartegory,items) =>{

  const uniqueId = `${cartegory}-${items.label}`
  SetCheckedItems(prev => ({
   
        ...prev,[uniqueId]:true
        
  
    
  }))
  

  const quantity = quantities[uniqueId] || 1
  SetCart(prev =>{
    const newCart = {...prev};
    if(!newCart[cartegory]){
      newCart[cartegory] = []
    }

 


    const existItems = newCart[cartegory].findIndex(cart => cart.label === items.label);
    
    if(existItems >= 0){
      newCart[cartegory][existItems].quantity  = quantity
    
    }
    else{
       newCart[cartegory].push({...items, quantity})
      };

      return newCart
  })

 notify()

}


const calculateTotalAmount = () =>{
  return Object.values(cart).flat().reduce((total, item)=> total + (item.price * item.quantity), 0 )
}

const notify = () =>{


  toast.success('Added !!!',{
    position : 'top-right'
 
  })

}

const generateOrderNumber = () =>{
 
  return Math.floor(1000000000 + Math.random() * 900000000)
};


useEffect(()=>{
  if(Object.keys(cart).length > 0 && orderNumber === 'NGN-ORD-XXXXXXXXX'){
    SetOrderNumber(`NGN-ORD-${generateOrderNumber()}`)
    setvalues((prev) => ({...prev, orderNumber}))
  }
  else if (Object.keys(cart).length === 0 ){
    SetOrderNumber('NGN-ORD-XXXXXXXXX')
    setvalues((prev) => ({...prev, orderNumber}))
  }
  setvalues((prev) => ({...prev, total: (calculateTotalAmount()).toFixed(2) }))
},[cart])

const [values,setvalues] = useLocalStorage('details', {total:'', orderNumber: ''});




const handleSave = () =>{
  console.log(values.total)
  console.log(values.orderNumber)
}

  return (
   <>
   
    <ToastContainer />
      
   {
 
    detail ? (
      <>
      <div className="max-w-[1000px] min-h-[100vh] mx-auto flex flex-col items-center">
      <Link to={'/restaurant'}><p className='border rounded-full my-3 p-1 shadow-lg cursor-pointer' title='Back to Homepage'><FcCollapse /></p></Link>
      <h1 className='font-bold text-[30px] text-[#004A4D] mb-7'>{id}</h1>
      <div className="items-price-grid grid gap-x-3 items-start grid-cols-[1fr_350px] max-[1000px]:grid-cols-1">

        
        <div className="items-grid glass-effect min-w-[340px] max-w-[340px] space-y-6 max-[1000px]:order-2 mb-3 p-5 rounded ">
         
        {Object.keys(detail).map((cartegory,i)=>(
        
          <div key={cartegory} className="wrapper  p-1  bg-white">
          <div 
           onClick={()=>HandleToggle(i)}
           className="label p-3 cursor-pointer shadow-2xl justify-between rounded-[10px] flex items-center bg-white">
          <div key={cartegory} className='flex'>{cartegory}</div>
          <div className="arrow flex relative">
          <p className={`${toggle[i] ? 'opacity-0': 'opacity-100'} text-[20px]`}><BiCaretDownCircle /></p>
          <p className={`${toggle[i] ? 'opacity-100': 'opacity-0'} text-[20px] absolute`}><BiCaretUpCircle /></p>
          </div>
          </div>

          {toggle[i] && <>
            <div className={`w-full bg-[#eeeeee] py-10 px-4 max-h-[20rems] space-y-6 overflow-y-scroll transition duration-1000 delay-700`}>
                {detail[cartegory].map((items,i)=>{
                   const uniqueId = `${cartegory}-${items.label}`
                    return (
                    <div key={i} className="w-full p-5 rounded-[10px] space-y-5 bg-white shadow-lg">
                      <p className='flex  items-center space-x-4'><span><BiMoney /></span><span>₦{(items.price).toFixed(2)} per peiece</span></p>
                      <p className=' flex space-x-5 items-center'><span>
                        <input type="checkbox"  disabled={items.status === 'Currently unavailable' ? true : false} checked={checkedItems[uniqueId] || false} onChange={() => HandleCheck(cartegory,items)} />
                        </span> <span className='text-end'>{items.label}</span></p>
                      <p className=' flex  items-center justify-between'><span>Status:</span> <span className={` capitalize ${items.status === 'Currently unavailable' ? 'text-[#cc2e2e]' : 'text-[#004A4D]'}`}>{items.status}</span></p>
                      <p className=' flex  items-center space-x-2'><span>Quantity:</span> <span className='input flex items-center space-x-3'>
                        
                        <input  className='w-[90px] outline-none border pl-1' onChange={(e) => HandleQuantity(uniqueId,parseInt(e.target.value, 10))}  defaultValue={1} type="number" min="1" max="200"  disabled={items.status === 'Currently unavailable' ? true : false}/>
                        <button title='Add item' disabled={items.status === 'Currently unavailable' ? true : false} className='flex items-center justify-center p-1 rounded-md text-white hover:bg-[#004A4D] bg-[#004a4d96]' onClick={() => AddToCart(cartegory,items)}><BiCheck/></button>
                        </span></p>
                    </div>
          
                )
              }
                )
                
              }



            </div>
          </>}
          </div>
     
       
          
        ))}
        </div>


        <div className="price-grid glass-effect max-w-[340px] max-[1000px]:order-1 mb-3 p-5 pb-1 rounded border">
          <h1 className='text-center text-[30px] font-[sans-serif] font-bold'>{id}</h1>
          <p className='py-3 border-b-[2px] border-dotted text-[15px] flex items-center justify-between '><span>Order No : </span><span className='font-semibold '>{orderNumber}</span></p>
          {Object.keys(cart).map((category)=>(
            <div className='py-2 space-y-2' key={category}>
              <h3 className='text-center text-[19px]'>{category}</h3>
              <ul className='space-y-2'>
                {cart[category].map((item,i)=>(
             
                <li key={i} className='flex items-center justify-between space-x-3'>
                  <span className='flex items-start space-x-2'>
                  <span>{item.quantity}</span> 
                   <span> x </span>   
                  <span className='text-left'>{item.label}</span>
                  </span> 
                  <span className='flex items-center space-x-2'>
                    <span  className='text-[#cc2e2e] text-[18px]' onClick={() => HandleRemove(category, item)}><MdDeleteForever /></span>
                    <span>₦{(item.price * item.quantity).toFixed(2)}</span>
                  </span>
                  </li>
                
              ))}
              </ul>
            </div>
            
          ))}
          <div className="total flex mt-6  items-center justify-between">
            <h1>Total</h1>
            <p className='border-t-[2px] pl-2 flex justify-end border-[#505050]'>₦{calculateTotalAmount().toFixed(2)}</p>
          </div>
          <div className="btn flex items-center justify-center py-5">
          <button onClick={handleSave} className=' glass-effect px-6 py-2 rounded-full'><Link className='text-[#004A4D] font-semibold text-[18px]'>Place Order</Link></button>
        </div>

        </div>
        



      </div>
        
      </div>
        

      </>
    
      
    )
    : (<div>Not Found</div>)
   }

   
   </>
  )
}

export default Info