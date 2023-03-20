import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { defaultUrl } from '../../../Components/Constants';
import '../../../styles/styles.css'
export default function Book() {
    const navigate = useNavigate();
    const [fromState, setfromState] = useState("");
    const [toState, settoState] = useState("")
    const [departingTimeState, setdepartingTimeState] = useState("")
    const [passengersNumber, setpassengersNumber] = useState("1")
    const [error, seterrormsg] = useState(null);
    const date = new Date();
    const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
    const minDate = date.getFullYear() + "-" + month + "-" + day;
    const [fromArray, updateFromArray] = useState([]);
    const [toArray, updatetoArray] = useState([]);

    const UrlFrom = defaultUrl+"api/flights/getFlightsFroms";
    const UrlTo = defaultUrl+"api/flights/getFlightsTos";
    useEffect(() => {
        async function fetchFroms() {
            const response = await (await fetch(UrlFrom)).json();
            updateFromArray(response);
        }
        fetchFroms();
    })
    async function fetchTos() {
        const response = await fetch(UrlTo,{
            method:"post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({from:fromState})
            });
            const content=await response.json();
        updatetoArray(content);
    }

    return (

        <section className="book" id="book">

            <h1 className="heading">
                <span>b</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
                <span className="space"></span>
                <span>n</span>
                <span>o</span>
                <span>w</span>
            </h1>

            <div className="row">

                <div className="image">
                    <img src="images/book-img.svg" alt="" />
                </div>

                <form action="">
                    <div className="inputBox">
                        <h3>From</h3>
                        <select type="text" placeholder="place name" onChange={(event) => setfromState(event.target.value)}>
                            <option value=""></option>
                            {fromArray.map((ele, key) =>
                                <option key={key} value={ele}>{ele}</option>
                            )}
                        </select>
                    </div>
                    {(fromState!=="" && fetchTos()) && <div className="inputBox">
                        <h3>To</h3>
                        <select type="text" placeholder="place name" onChange={(event) => settoState(event.target.value)} >
                        <option value=""></option>
                            {toArray.map((ele, key) =>
                                <option key={key} value={ele}>{ele}</option>
                            )}
                        </select>
                    </div>}
                    <div className="inputBox">
                        <h3>how many</h3>
                        <input defaultValue="1" type="number" placeholder="number of travelers" onChange={(event) => setpassengersNumber(event.target.value)} />
                    </div>
                    <div className="inputBox">
                        <h3>leaving</h3>
                        <input min={minDate} type="date" id='departing-Time' onChange={(event) => setdepartingTimeState(event.target.value)} />
                    </div>
                    {error && <h2 style={{ color: 'red' }}>{error}</h2>}
                    <button onClick={() => {
                        if (fromState !== "" && toState !== "" && departingTimeState !== "") {
                            navigate({ pathname: "/BookingSearch" }, { state: { from: fromState, to: toState, departingTime: departingTimeState, passengersNumber: passengersNumber } });
                            window.scrollTo(0, 0);
                        }
                        else {
                            let alertMsg = "";
                            if (fromState === "") alertMsg += "Enter from location!!\n";
                            if (toState === "") alertMsg += "Enter to location!!\n";
                            if (departingTimeState === "") alertMsg += "Enter departing time!!\n";
                            seterrormsg(alertMsg);;
                        }
                    }} type="button" className="btn">Book Now</button>
                </form>

            </div>

        </section>
    )
}
