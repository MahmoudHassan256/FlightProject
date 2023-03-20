import { faCalendar, faClock, faDollar, faPlane, faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Flight(props) {
  const flight=props.flight;
  const navigate=useNavigate();
  return (
    <div className="flight">
      <div className="left-section">
        <div className="flight-data from">
          <FontAwesomeIcon icon={faPlaneArrival} color="#ffa500"/>From:{flight.from}</div>
        <div className="flight-data to">
          <FontAwesomeIcon icon={faPlaneDeparture} color="#ffa500"/>To:{flight.to}</div>
        <div className='flight-data airplane'>
          <FontAwesomeIcon icon={faPlane} color="#ffa500"/>Airline:{flight.airplaneName}</div>
      </div>
      <div className="middle-section">
        <div className="flight-data departingDay">
        <FontAwesomeIcon icon={faCalendar} color="#ffa500"/>Departing Day:{flight.departing}</div>
        <div className="flight-data timedeparting">
        <FontAwesomeIcon icon={faClock} color="#ffa500"/>Time Departing:{flight.departingTime}</div>
        <div className="flight-data timearrival">
        <FontAwesomeIcon icon={faClock} color="#ffa500"/>Time arrival:{flight.arrivalTime}</div>
      </div>
      <div className="right-section">
        <div className="flight-data price">{flight.price}<FontAwesomeIcon icon={faDollar} color="#ffa500"/></div>
        <button className="btn" onClick={()=>{
          navigate({pathname:"/Flight"},{state:props});
          window.scrollTo(0,0);
        }}
        >Select</button>
      </div>
    </div>
  )
}
