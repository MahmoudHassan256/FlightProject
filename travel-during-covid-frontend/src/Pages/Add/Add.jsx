import React, { useState } from 'react'
import { defaultUrl } from '../../Components/Constants'
import './styles.css'

export default function Add() {
    const [data, updateFlight] = useState({ from: '', to: '', price: 0, departing: '', airplaneName: '', maxSeat: 0, departingTime: '', arrivalTime: '' })
    const handel = async () => {
        if (data.airplaneName !== '' && data.arrivalTime !== '' && data.departing !== '' && data.departingTime !== '' && data.from !== '' && data.maxSeat !== 0 && data.price !== 0 && data.to !== '') {
            fetch(defaultUrl+"api/flights/createFlight", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
        }
        else
            alert("no")
    }
    return (
        <div style={{ marginTop: "74px",width:"80%",margin:"90px auto 1rem" }} className="covid-info-element">
            <div className='inputBoxAdmin'>
                <label htmlFor="from">from:</label>
                <input type="text" name="from" onChange={(event) => updateFlight({ ...data, from: event.target.value })}/>
                   
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="to">to:</label>
                <input type="text" name="to" onChange={(event) => updateFlight({ ...data, to: event.target.value })}/>
                
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="price">price:</label>
                <input type="number" name="price" onChange={(event) => updateFlight({ ...data, price: event.target.value })} />
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="departing">departing:</label>
                <input type="date" name="departing" onChange={(event) => updateFlight({ ...data, departing: event.target.value })} />
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="airplaneName">airplaneName:</label>
                <select type="text" name="airplaneName" onChange={(event) => updateFlight({ ...data, airplaneName: event.target.value })} >
                    <option value=""></option>
                    <option value="The Controlled">The Controlled</option>
                    <option value="Full Fly">Full Fly</option>
                    <option value="The Aerial">The Aerial</option>
                    <option value="The Steep">The Steep</option>
                    <option value=""></option>
                </select>
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="maxSeat">maxSeat:</label>
                <input type="number" name="maxSeat" onChange={(event) => updateFlight({ ...data, maxSeat: event.target.value })} />
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="departingTime">departingTime:</label>
                <input type="time" name="departingTime" onChange={(event) => updateFlight({ ...data, departingTime: event.target.value })} />
            </div>
            <div className='inputBoxAdmin'>
                <label htmlFor="arrivalTime">arrivalTime:</label>
                <input type="time" name="arrivalTime" onChange={(event) => updateFlight({ ...data, arrivalTime: event.target.value })} />
            </div>
            <div className="inputBoxAdmin">
                <button onClick={handel} >add</button>

            </div>

        </div>

    )
}
