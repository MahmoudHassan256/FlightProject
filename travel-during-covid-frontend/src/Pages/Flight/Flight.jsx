import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Person from './Components/Person';
import './styles.css'

export default function Flight() {
  const navigate=useNavigate();
  const location = useLocation();
  const flight = location.state.flight;
  const number = Number(location.state.number);
  const array = [...Array(number).keys()];
  let ticketsArray = Array(number).fill({ firstName: '', lastName: '', gender: '', dateBirth: '', idNumber: '', nationality: '' });
  const [error, setError] = useState(null);
  function checkIfFilled(person){
    console.log(person);
    if (person.dateBirth !== '' && person.firstName !== '' && person.gender !== '' && person.idNumber !== '' && person.lastName !== '' && person.nationality !== '') {
      return true;
    }
    return false;
  }
  function handelClick() {
    for (let index = 0; index < number; index++) {
      if (checkIfFilled(ticketsArray[index])===false) {
        setError(error => error = "Fill form for person");
        return false;
      }
    }
    setError(null);
    navigate({pathname:'/Checkout'},{state:{number:number,flight:flight}})
    window.scrollTo(0,0);
    return true;
  }
  return (
    <div className='wrapper'>
      <div className='flight-header'>Flight Profile</div>
      <div className='flight-profile'>
        <div className='info-wrapper'>from:<div className='info-value'>{flight.from}</div></div>
        <div className='info-wrapper'>to:<div className='info-value'>{flight.to}</div></div>
        <div className='info-wrapper'>airline:<div className='info-value'>{flight.airplaneName}</div></div>
        <div className='info-wrapper'>date:<div className='info-value'>{flight.departing}</div></div>
        <div className='info-wrapper'>arrival:<div className='info-value'>{flight.arrivalTime}</div></div>
        <div className='info-wrapper'>departing:<div className='info-value'>{flight.departingTime}</div></div>
        <div className='info-wrapper'>availabe-seats:<div className='info-value'>{flight.maxSeat}</div></div>
        <div className='info-wrapper'>price:<div className='info-value'>{flight.price}</div></div>
      </div>
      <div className='flight-booking'>
        {array.map((ele, key) =>
          <div key={key}>
            <h3>Peson #{ele + 1}</h3>
            <Person data={ticketsArray} index={ele} />
          </div>
        )}
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        <button className='btn' onClick={handelClick}>buy Tickets</button>
      </div>
    </div>
  )
}
