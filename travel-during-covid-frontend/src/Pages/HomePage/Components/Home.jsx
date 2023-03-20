import React from 'react'
import '../../../styles/styles.css'
export default function Home() {
    return (
        <section className="home" id="home">
            <div className="video-container">
                <video src="images/vid-1.mp4" id="video-slider" loop autoPlay muted></video>
            </div>
        </section>
    )
}
