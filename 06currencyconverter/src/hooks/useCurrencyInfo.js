import { useEffect, useState } from "react";
import currencies from "../components/currencies";
function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    useEffect(()=>{
         currencies.currency.then((res)=>res.json()).then((res)=>setData(res[currency]))
    },[currency])
    console.log(data)
    return data;
}
// console.log(data);
export default useCurrencyInfo;
