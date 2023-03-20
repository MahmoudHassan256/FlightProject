import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import Footer from './Footer'
import Header from './Header'
import '../styles/styles.css'
import RegisterPage from '../Pages/Register/RegisterPage'
import LoginPage from '../Pages/Login/LoginPage'
import BookingSearch from '../Pages/BookingSearch/BookingSearch'
import { setFlights } from '../Slicers/FlightsSlice'
import { useDispatch } from 'react-redux'
import Flight from '../Pages/Flight/Flight'
import CheckOut from '../Pages/CheckOut/CheckOut'
import Add from '../Pages/Add/Add'
import { defaultUrl } from './Constants'


export default function Layout() {
    const FlightsUrl=defaultUrl+"api/flights/getFlights";
    const dispatch=useDispatch();
    useEffect(()=>{
        async function FetchFlights(){
            const flightsResponse=await (await fetch(FlightsUrl)).json();
            dispatch(setFlights(flightsResponse));
        }
        FetchFlights();
    })
    return (
        <div className='Layout'>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="Register" element={<RegisterPage/>}></Route>
                    <Route path="Login" element={<LoginPage/>}></Route>
                    <Route path='BookingSearch' element={<BookingSearch/>}></Route>
                    <Route path='Flight' element={<Flight/>}></Route>
                    <Route path='Checkout' element={<CheckOut/>}></Route>
                    <Route path='add' element={<Add/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
