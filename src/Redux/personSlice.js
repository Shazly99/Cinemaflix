// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import  axios  from 'axios';


// export let getPersons=createAsyncThunk("actor/getPersons",async()=>{
//     let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=cb9d54251bfb16d22a9165b924cf3c91`)
//     return data.results
// })
 

// let person=createSlice({
//     name:'actor',
//     initialState:{personData:[]},
//     extraReducers:(builder)=>{
//         builder.addCase(getPersons.fulfilled,(state,action)=>{
//             state.personData=action.payload
//         })
//     }
// })


// let personReducer=person.reducer;
// export default personReducer

