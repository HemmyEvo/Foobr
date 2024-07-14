
import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValues) => {
 const [storedValues, setStoredValues] = useState(() => {
        const items = localStorage.getItem(key);
        return items ? JSON.parse(items) : initialValues;

 });


 useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(storedValues));
 },[key, storedValues])





 return [storedValues,setStoredValues]
}

export default useLocalStorage