import React, { useEffect, useState } from 'react'
import axios from './axios.js';


function Row(props) {
   const [movies,setMovies]=useState([])
   useEffect(()=>{
         async function fetchData(){
            const request=await
         }

   },[movies])


  return (
    <div>
      <h2>{props.title}</h2>
      
    </div>
  );
}

export default Row