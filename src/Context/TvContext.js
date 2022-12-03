import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const tvNewContext = createContext([])

function TvContext({ children }) {

  const [categorys, setCategory] = useState([]) 
  const [person, setPerson] = useState([]) 

  async function getDataCategories(type, pageNumber) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${type}?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNumber}`);
    setCategory(data.results)
  } 
   async function getDataPerson(pageNumber) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNumber}`);
    setPerson(data.results)
  }

  const getData = async (e) => { 
    if (e.target.value) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=cb9d54251bfb16d22a9165b924cf3c91&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
      setCategory(data.results)
    } else {
    getDataCategories("popular", 1)  
    }
  }


  useEffect(() => {
    getDataCategories("popular", 1)
    getDataPerson(1)
  }, [])

  return (
    <> <tvNewContext.Provider value={{ categorys,getData, getDataCategories,person,getDataPerson }}>
      {children}
    </tvNewContext.Provider>
    </>
  )
}

export default TvContext
