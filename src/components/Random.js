import React from 'react'
import { useState , useEffect } from'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function Random() {

//     const API_KEY ='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
// ;
//     const[gif , setgif] = useState('');

//     const[loading , setloading]=useState(false);
    

//     async function fetchData(){
//         setloading(true);
//         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//         const res = await axios.get(url)
//         setgif(res.data.data.images.original.url) 
//         console.log(res);
//         setloading(false);  // after data fetch, set loading to false  to hide spinner

//     }

//     useEffect(() => {
//       // fetch data
//        fetchData();
//     }, [])

 const {gif , loading, fetchData} = useGif();
    

    function handleClick(){
        fetchData();
    }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} width="450"></img>) 
        }

        

        <button onClick={handleClick} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">Get New Gif</button>
    </div>
  )
}
