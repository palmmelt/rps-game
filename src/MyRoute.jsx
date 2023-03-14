import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import { useState,useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"

const MyRoute = () => {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)

        },3000)
    },[])
    return (
    <BrowserRouter>
        <div >
        {
            loading?
            <div className="loading flex-col">
                <PacmanLoader 
                color="#FFDA00"
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            /><p className='text-[#FFDA00] font-bold p-3 text-3xl ml-24 mt-1'>RPS Game.</p>
            </div>
            :
            <Switch>
                <Route path="/" component={Homepage}/>
            </Switch>
        }       
        </div>
    </BrowserRouter>
    )
  }
  
  export default MyRoute