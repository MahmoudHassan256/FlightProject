import { configureStore } from "@reduxjs/toolkit";
import FlightsSlice from "./Slicers/FlightsSlice";
//import UserSlicer from "./Slicers/UserSlicer";
import SerachedFlightSlice from './Slicers/SearchedFlighSlice';


export default configureStore({
    reducer:{
        flights:FlightsSlice,
        searchedflight:SerachedFlightSlice,
    },
})
