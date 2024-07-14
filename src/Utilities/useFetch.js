
import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [pending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() =>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                if (!res.ok){
                    throw Error ('Could not fetch the data for the resources')
                }
                return res.json();
            })
            .then(data =>{
                setData(data)
                setIsPending(false)
              
                setError(null)
            })
            .catch(err =>{
                setIsPending(false)
                setError(err.message);
            })
        },100)
    },[url])

    return{ data , pending , error}
}
export default useFetch;