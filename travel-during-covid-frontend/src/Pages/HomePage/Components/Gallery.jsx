import React from 'react'
import '../../../styles/styles.css'

export default function Gallery() {
  return (

<section className="gallery" id="gallery">

<h1 className="heading">
    <span>g</span>
    <span>a</span>
    <span>l</span>
    <span>l</span>
    <span>e</span>
    <span>r</span>
    <span>y</span>
</h1>

<div className="box-container">

    <div className="box">
        <img src="images/g-1.jpg" alt=""/>
        <div className="content">
            <h3>London</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-2.jpg" alt=""/>
        <div className="content">
            <h3>Dubai</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-3.jpg" alt=""/>
        <div className="content">
            <h3>Athena</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-4.jpg" alt=""/>
        <div className="content">
            <h3>Miami</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-5.jpg" alt=""/>
        <div className="content">
            <h3>Pisa</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-6.jpg" alt=""/>
        <div className="content">
            <h3>Milan</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-7.jpg" alt=""/>
        <div className="content">
            <h3>Egypt</h3>
        </div>
    </div>
    <div className="box">
        <img src="images/g-8.jpg" alt=""/>
        <div className="content">
            <h3>Barcelona</h3>
        </div>
    </div>

</div>

</section>  )
}
