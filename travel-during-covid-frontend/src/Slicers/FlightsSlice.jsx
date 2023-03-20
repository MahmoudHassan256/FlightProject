import { createSlice } from "@reduxjs/toolkit";

export const FlightsSlice=createSlice({
    name:'flights',
    initialState:{
        value:{}
    },
        reducers:{
            setFlights:(state,action)=>{
                return{
                    ...state,
                    value:action.payload,
                };
            }
        }
})
export const {setFlights}=FlightsSlice.actions;
export default FlightsSlice.reducer