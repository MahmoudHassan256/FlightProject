import { faCouch, faDoorOpen, faMartiniGlass, faMaskFace, faTrafficLight, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { defaultUrl } from '../../../Components/Constants';
const CovidUrl = defaultUrl+"api/covid/getCovid"
export default function CovidBox(props) {
    const covid = useRef();
    const navigate=useNavigate();
    useEffect(()=>{
        async function getData() {
            const response = await fetch(CovidUrl, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ to: props.to })
            });
            const content = await response.json();
            covid.current = content[0];
            console.log(content?.[0]);
        }
        getData();
    })
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className='flight-header' >Covid Restrictions for {props.to}</div>
            {covid.current &&
            <div className="covid-info">
                <div className='covid-info-element'>
                    <div className="covid-info-header">
                        <FontAwesomeIcon icon={faDoorOpen} color="#ffa500" />
                        <div className='covid-info-header-value'>Entry:</div>
                    </div>
                    <div className="covid-info-data">
                        <div className='covid-info-value'>{covid.current.entry}</div>
                    </div>
                </div>

                <div className='covid-info-element'>
                    <div className="covid-info-header">
                        <FontAwesomeIcon icon={faTrafficLight} color="#ffa500" />
                        <div className='covid-info-header-value'>COVID-19 testing:</div>
                    </div>
                    <div className="covid-info-data">
                        <div className='covid-info-value'>{covid.current.testing}</div>
                    </div>
                </div>

                <div className='covid-info-element'>
                    <div className="covid-info-header">
                        <FontAwesomeIcon icon={faCouch} color="#ffa500" />
                        <div className='covid-info-header-value'>Quarantine:</div>
                    </div>
                    <div className="covid-info-data">
                        <div className='covid-info-value'>{covid.current.quarantine}</div>
                    </div>
                </div>

                <div className='covid-info-element'>
                    <div className="covid-info-header">
                        <FontAwesomeIcon icon={faUtensils} color="#ffa500" />
                        <div className='covid-info-header-value'>Restaurants:</div>
                    </div>
                    <div className="covid-info-data">
                        <div className='covid-info-value'>{covid.current.restaurants}</div>
                    </div>
                </div>

                <div className='covid-info-element'>
                    <div className="covid-info-header">
                        <FontAwesomeIcon icon={faMaskFace} color="#ffa500" />
                        <div className='covid-info-header-value'>Masks:</div>
                    </div>
                    <div className="covid-info-data">
                        <div className='covid-info-value'>{covid.current.masks}</div>
                    </div>
                </div>

                <div className='covid-info-element'>
                    <div className="covid-info-header">
                        <FontAwesomeIcon icon={faMartiniGlass} color="#ffa500" />
                        <div className='covid-info-header-value'>Bars:</div>
                    </div>
                    <div className="covid-info-data">
                        <div className='covid-info-value'>{covid.current.bars}</div>
                    </div>
                </div>
            </div>
            }
            {!covid.current && <button className='btn' onClick={()=>navigate(0)}>Show</button>}
            <div className='flight-header' >Documents:</div>
            {covid.current?.document && <div className="covid-document">
                {covid.current.document.map((ele, key) =>
                    <div key={key} className="document-value">{ele}</div>
                )}
            </div>}
        </div>
    )
}
