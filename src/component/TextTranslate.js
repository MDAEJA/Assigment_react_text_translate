import React, { useState } from 'react'
import axios, { Axios } from 'axios';
import "../component/textTranslatorStyle.css"

function TextTranslate() {
    const[data,setData] = useState('');
    const[targetvalue,setTargetValue] = useState('');
    const[convertText,setConvertText] = useState('GETING');
    // setConvertText("Loading data....")
    const fetchdata = async ()=>{
        // const axios = require('axios');
        setConvertText("Loading data....")
 let stringLang = targetvalue.split('').slice(0,2).join('').toLocaleLowerCase();
   
const encodedParams = new URLSearchParams();
encodedParams.set('source_language', 'en');
encodedParams.set('target_language', stringLang);
encodedParams.set('text', data);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd2817b268cmsh386415b35146721p126d7bjsnbb2fc93fa0b9',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.translatedText);
    let converText = (response.data.data.translatedText);

    console.log(converText)
    setConvertText(converText)
    console.log(convertText)
} catch (error) {
	console.error(error);
}
    }

  return (
    <>
    <div className='main-div'>
    <div>
        <h1 style={{textAlign:'center',backgroundColor:'orangered',textTransform:"uppercase",color:"white",fontStyle:"oblique",padding:'5px 10px'}}>text translate</h1>
    </div>
    <div>
        <label style={{marginRight:'20px',fontSize:'20px',fontStyle:"italic",fontWeight:'bolder'}}>Input</label>
        <input style={{padding:'5px 10px',borderRadius:'10px',fontStyle:'oblique',fontWeight:'bolder',textTransform:'capitalize' }} type='text' placeholder='Enter text to Translate' onChange={(e)=>{
            setData(e.target.value)
        }}></input>
    </div>
    <div>
        <label style={{marginRight:'10px',fontSize:'15px',fontStyle:"italic",fontWeight:'bolder'}}>source</label>
        <select style={{backgroundColor:'grey',padding:'2px 5px',color:'white',textTransform:'capitalize'}}>
            <option>English</option>
        </select>

        <label style={{marginLeft:'20px',marginRight:'10px',fontSize:'15px',fontStyle:"italic",fontWeight:'bolder'}}>Target</label>

        <select style={{backgroundColor:'grey',padding:'2px 5px',color:'white',textTransform:'capitalize'}} onChange={(e)=>{setTargetValue(e.target.value)}}>
        
        <option>Hindi</option>
        <option>African</option>
        <option>Arabic</option>
        <option>Bengali</option>
        <option>French</option>
        <option>Greek</option>
        <option>Italic</option>
        <option>Gujarati</option>
        <option>Kannada</option>
        <option></option>
        </select>
    </div>
    <button style={{cursor:'pointer',padding:'5px 80px',backgroundColor:'rgba(244, 91, 15, 0.99)',borderRadius:'10px',color:'white'}} onClick={fetchdata}>Translate </button>
    <label style={{color:'black',fontStyle:'oblique',fontWeight:'bold',textDecoration:'underline'}}>Getting Data Here</label>
    <button style={{padding:"5px 50px",marginBottom:'20px',color:'red',fontStyle:'oblique',fontSize:'20px',fontWeight:'bold',textAlign:"center",borderRadius:'10px',textTransform:'capitalize'}}>{convertText}</button>
    </div>
    </>
  )
}

export default TextTranslate
