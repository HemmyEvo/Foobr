import { useEffect, useState } from 'react'


const useCartNumber = () => {
    const [cartQuantity , setCartQuantity] = useState(() =>{
        const savedCartNumber = localStorage.getItem('cartNumber');
        return savedCartNumber !== null ? JSON.parse(savedCartNumber) : 0
    });
    
    useEffect(() =>{
        localStorage.setItem('cartNumber' , JSON.stringify(cartQuantity));
    }, [cartQuantity])
  return [cartQuantity, setCartQuantity]

  
}

export default useCartNumber