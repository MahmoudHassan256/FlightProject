import React from 'react'
import '../../../styles/styles.css'
export default function Review() {
  return (

<section className="review" id="review">

<h1 className="heading">
    <span>r</span>
    <span>e</span>
    <span>v</span>
    <span>i</span>
    <span>e</span>
    <span>w</span>
</h1>

<div className="swiper-container review-slider">

    <div className="swiper-wrapper">

        <div className="swiper-slide">
            <div className="box">
                <img src="images/pic1.png" alt=""/>
                <h3>john deo</h3>
                <p>Very Helpfull!!has everything you need</p>
            </div>
        </div>
        <div className="swiper-slide">
            <div className="box">
                <img src="images/pic2.png" alt=""/>
                <h3>john deo</h3>
                <p>Looks Good Works amazingly!!!need some tweaks here and there but the core is there</p>

            </div>
        </div>
        <div className="swiper-slide">
            <div className="box">
                <img src="images/pic3.png" alt=""/>
                <h3>john deo</h3>
                <p>Love the theme the colors and the flow of the website keep up the good work!</p>
            </div>
        </div>

    </div>

</div>

</section>  )
}
