import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'

function Politics() {
    const [firstPoliticsData,setFirstPoliticsData]=useState();
    const [secPoliticsData,setSecPoliticsData]=useState();
    const [thirdPoliticsData,setThirdPoliticsData]=useState();
    const [fourthPoliticsData,setFourthPoliticsData]=useState();


  const url1=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,Politics&page=0&country=in`
  const url2=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,Politics&page=1&country=in`
  const url3=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,Politics&page=2&country=in`
  const url4=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,Politics&page=3&country=in`

  const apiData1=()=>{
    axios.get(url1).then((response)=>{

           setFirstPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })

  }

  const apiData2=()=>{
    axios.get(url2).then((response)=>{

           setSecPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData3=()=>{
    axios.get(url3).then((response)=>{

           setThirdPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

  const apiData4=()=>{
    axios.get(url4).then((response)=>{

           setFourthPoliticsData(response.data.results);
          }).catch(()=>{
              throw new Error();
          })
  }

   useEffect(()=>{
    apiData1();
    apiData2();
    apiData3();
    apiData4();

   },[])

  return (
    <>
       <MainStore data={firstPoliticsData} s_data={secPoliticsData} t_data={thirdPoliticsData} f_data={fourthPoliticsData}></MainStore>
    </>
  )
}

export default Politics;