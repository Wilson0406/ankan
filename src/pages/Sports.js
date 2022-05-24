import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'

function Sports() {
    const [firstSportsData,setFirstSportsData]=useState();
  const [secSportsData,setSecSportsData]=useState();

 
  const url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4583328f31604630a0ce81abaf0821ab`
  const url2=`https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=4583328f31604630a0ce81abaf0821ab`
  const apiData=()=>{
    axios.get(url2).then((response)=>{
          
           setFirstSportsData(response.data.articles);
          }).catch(()=>{
              throw new Error();
          })
         
          
      
  }

  const apiData2=()=>{
    axios.get(url).then((response)=>{
          
           setSecSportsData(response.data.articles);
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
       <MainStore data={firstSportsData} s_data={secSportsData}></MainStore>
    </>
  )
}

export default Sports