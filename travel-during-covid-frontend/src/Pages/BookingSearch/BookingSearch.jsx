import { faCalendar, faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import CovidBox from './Components/CovidBox'
import Flight from './Components/Flight'
import './styles.css'
export default function BookingSearch() {
    const location = useLocation();
    const navigate = useNavigate();
    const flightsArray = useSelector((state) => state.flights.value);
    const props = location.state;
    function filterArray(Array) {
        let temparray = Array;
        if (props.from !== "all")
            temparray = Array.filter((ele) => ele.from.toUpperCase() === props.from.toUpperCase());
        if (props.to !== "all")
            temparray = Array.filter((ele) => ele.to.toUpperCase() === props.to.toUpperCase());
        if(props.to!=="all" && props.from!=="all"){
            temparray=Array.filter((ele) => ele.to.toUpperCase() === props.to.toUpperCase()).filter((ele) => ele.from.toUpperCase() === props.from.toUpperCase());
        }
        return temparray;
    }
    function navigateToComponent(component) {
        navigate("/");
        setTimeout(() => {
            const pos = document.getElementById(component);
            pos.scrollIntoView();
        }, 10);

    }
    return (
        <div style={{ marginTop: "74px" }}>
            <div className="flight-info">
                <div className='info-header'>
                    <FontAwesomeIcon icon={faPlaneDeparture} color="#ffa500"/>
                    From:<div className='info-value'>{props.from}</div>
                </div>

                <div className='info-header'>
                    <FontAwesomeIcon icon={faPlaneArrival} color="#ffa500"/>
                    To:<div className='info-value'>{props.to}</div>
                </div>

                <div className='info-header'>
                    <FontAwesomeIcon icon={faCalendar} color="#ffa500"/>
                    Date Departing:<div className='info-value'>{props.departingTime}</div>
                </div>

                <button className='btn' onClick={() => navigateToComponent("book")}>Reset Search</button>
            </div>
            <CovidBox to={props.to}/>
            <div className="flights-container">
                {Array.isArray(flightsArray) ? filterArray(flightsArray).map((ele, key) =>
                    <Flight key={key} flight={ele} number={props.passengersNumber} />
                ) : null}
            </div>
        </div>
    )
}
