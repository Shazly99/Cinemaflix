import axios  from 'axios';
import { useEffect, useState } from 'react';


const useFetch = (type,id) => {

    const [data, setData] = useState([])
    const [pagination, setPagination] = useState([])
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLoading2, setIsLoading2] = useState(true)
    const [isLoading3, setIsLoading3] = useState(true)
    const [haveError, setHaveError] = useState(null)


    async function getData() {
        return await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=cb9d54251bfb16d22a9165b924cf3c91`);
    }

    async function getDetails() {
        return await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=cb9d54251bfb16d22a9165b924cf3c91`);
    }
    async function getPagination() { 
        return  await axios.get(`https://api.themoviedb.org/3/${type}/popular?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${id}`) 
    }
    

    useEffect(() => {
        getData().then(res => {
            setData(res.data.results);
            setInterval(() => { 
                setIsLoading(false)
            },  1000);
            setHaveError(null);

        }).catch(error => {
            setHaveError(error); 

            setInterval(() => { 
                setIsLoading(false)
            }, 1000);
        }) 

        getDetails().then(res=>{
            setDetails(res.data);
            setInterval(() => { 
                setIsLoading2(false)
            }, 1000);
            setHaveError(null);

        }).catch(error => {
            setHaveError(error);
            setInterval(() => { 
                setIsLoading2(false)
            },1000);

        })


        getPagination().then(res=>{
            setPagination(res.data.results);
            setInterval(() => { 
                setIsLoading3(false)
            }, 1000);
            setHaveError(null);
        }).catch(error => {
            setHaveError(error);
            setInterval(() => { 
                setIsLoading3(false)
            },1000);

        })
    }, [id])
    

    return {
        data,
        details,
        pagination,
        isLoading,
        haveError,
        isLoading2,
        isLoading3

    }
}


export default useFetch;
