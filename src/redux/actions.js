import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {options} from "../helpers/constants"



export const getLanguages = createAsyncThunk("translate/getLanguages",


async()=>{
   const res = await axios.get(
        'https://text-translator2.p.rapidapi.com/getLanguages',
         options
    )
    const languages = res.data.data.languages

    const newLanguages = languages.map((lang) => ({
        value: lang.code,
        label: lang.name,
      }));

    return newLanguages;

    

})

export const getAnswer = createAsyncThunk("translate/getAnswer",
async(props)=>{
    const encodedParams = new URLSearchParams();
encodedParams.set('source_language', props.sourceLang.value);
encodedParams.set('target_language', props.targetLang.value);
encodedParams.set('text', props.text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '16e596024fmsh2253e0ff37b8928p16d390jsnae860c27e763',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

  const res = await axios.request(options)

  const answer = res.data.data.translatedText
  
  return answer


})