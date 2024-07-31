import React from 'react'
import { useState , useEffect } from'react'
import axios from 'axios'

const API_KEY ='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';



export default function useGif(tag) {

    const RandomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const TagMemeurl =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    
        const[gif , setgif] = useState('');
        const[loading , setloading]=useState(false);
        
        async function fetchData(tag){
            setloading(true);
            
            const res = await axios.get(tag ? (TagMemeurl) : (RandomMemeurl))
            setgif(res.data.data.images.original.url) 
            console.log(res);
            setloading(false);  // after data fetch, set loading to false  to hide spinner
    
        }
    
        useEffect(() => {
          // fetch data
           fetchData();
        }, [])

        return {
            gif,
            loading,
            fetchData
        };
}
