import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations';

const PreLoader = () => {

    useEffect(()=>{

    preLoaderAnim()

    },[]);

  return (
   <div className="preloader">
        <div className="texts-container">
            <span>HEINRICH</span>
            <span>GEE</span>
            <span>CASTRO</span>
        </div>
   </div>
  )
}

export default PreLoader
