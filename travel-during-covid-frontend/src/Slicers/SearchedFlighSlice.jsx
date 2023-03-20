import { createSlice } from "@reduxjs/toolkit";

export const SearchedFlightSlice=createSlice({
    name:'flights',
    initialState:{
        value:{
            from:"all",
            to:"all",
            departingTime:"any",
            arrivalTime:"any",
            passengersNumber:"1",
        }
    },
        reducers:{
            setSearchedFlights:(state,action)=>{
                return{
                    ...state,
                    value:action.payload,
                };
            }
        }
})
export const {setSearchedFlights}=SearchedFlightSlice.actions;
export default SearchedFlightSlice.reducer