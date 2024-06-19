import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
    const [data , setData] = useState({})
    useEffect( () =>{   /// it is a hook which tacke 2 param 1st method , 2nd dependency
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) // api calling using fetch( method)
        .then((response)=> response.json()) ///get response from api
        .then((response)=> setData(response[currency]))   // currency to convert eg- inr usd etc
        console.log(data); //print the data in console
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyinfo;    //return whole method