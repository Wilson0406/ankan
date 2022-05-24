import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MainStore from '../MainStore'
function ScienceAndTech() {
    const [firstSATData,setFirstSATData]=useState();
    const [secSATData,setSecSATData]=useState();
  
   
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=4583328f31604630a0ce81abaf0821ab`
    const url2=`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=4583328f31604630a0ce81abaf0821ab`
    const apiData=()=>{
      axios.get(url2).then((response)=>{
            
             setFirstSATData(response.data.articles);
            }).catch(()=>{
                throw new Error();
            })
           
            
        
    }
  
    const apiData2=()=>{
      axios.get(url).then((response)=>{
            
             setSecSATData(response.data.articles);
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
            <MainStore data={firstSATData} s_data={secSATData}></MainStore>
    </>
  )
}

export default ScienceAndTech