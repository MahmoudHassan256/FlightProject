import { faBed, faBeer, faBullhorn, faDollar, faDownLeftAndUpRightToCenter, faGlobeAsia, faHiking, faHotel, faPizzaSlice, faPlane, faSmile, faThumbsUp, faTree, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../../styles/styles.css'
export default function Services() {
  return (

<section className="services" id="services">

<h1 className="heading">
    <span>s</span>
    <span>e</span>
    <span>r</span>
    <span>v</span>
    <span>i</span>
    <span>c</span>
    <span>e</span>
    <span>s</span>
</h1>

<div className="box-container">

    <div className="box">
        <FontAwesomeIcon icon={faHotel} size="6x"/>
        <h3>affordable hotels</h3>
        <p>Our Website will always look for the best and suitable prices
        <FontAwesomeIcon icon={faDollar}/> 
        <FontAwesomeIcon icon={faBed}/>
        </p>
    </div>
    <div className="box">
    <FontAwesomeIcon icon={faUtensils} size="6x"/>
        <h3>food and drinks</h3>
        <p>Pasta in Rome <FontAwesomeIcon icon={faPizzaSlice}/>,Beer in Berlin <FontAwesomeIcon icon={faBeer}/> any thing is worth to travel for</p>
    </div>
    <div className="box">
    <FontAwesomeIcon icon={faBullhorn} size="6x"/>
        <h3>safty guide</h3>
        <p>We will keep in contact wenever we have a member, being a member is being a member of the family too <FontAwesomeIcon icon={faSmile}/></p>
    </div>
    <div className="box">
    <FontAwesomeIcon icon={faGlobeAsia} size="6x"/>
        <h3>around the world</h3>
        <p>There is alot of places to find and alot of Cities to dive into <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter}/> so what are you waiting for go ahead BOOK NOW!!!</p>
    </div>
    <div className="box">
    <FontAwesomeIcon icon={faPlane} size="6x"/>

        <h3>fastest travel</h3>
        <p>WE only want the best <FontAwesomeIcon icon={faThumbsUp}/> for our custumers so we only search for the fastest airplanes</p>
    </div>
    <div className="box">
    <FontAwesomeIcon icon={faHiking} size="6x"/>

        <h3>adventures</h3>
        <p>Being one with the nature is kinda relaxing so why not start a hike <FontAwesomeIcon icon={faTree}/></p>
    </div>

</div>

</section>
  )
}
