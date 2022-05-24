import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import MainStore from '../MainStore'
import { useEffect } from 'react';


function India() {
  const [firstIndiaData,setFirstIndiaData]=useState();
  const [secIndiaData,setSecIndiaData]=useState();

 
  const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4583328f31604630a0ce81abaf0821ab`
  const url2=`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4583328f31604630a0ce81abaf0821ab`
  const apiData=()=>{
    axios.get(url2).then((response)=>{
          
           setFirstIndiaData(response.data.articles);
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }

  const apiData2=()=>{
    axios.get(url).then((response)=>{
          
           setSecIndiaData(response.data.articles);
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }



  
  
   useEffect(()=>{
    apiData();
    apiData2();
  
   },[])
  return (
    <>
         <MainStore data={firstIndiaData} s_data={secIndiaData}></MainStore>
    </>
  )
}

export default India