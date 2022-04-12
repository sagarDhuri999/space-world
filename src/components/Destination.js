import React, { useState } from 'react'

import './Pages.css';
// import { destinations } from "../pages/data.json";

const Destination = () => {

    const destinations = [
        {
            "name": "Moon",
            "images": {
                "png": "img/image-moon.png",
                "webp": "img/image-moon.webp"
            },
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
        },
        {
            "name": "Mars",
            "images": {
                "png": "img/image-mars.png",
                "webp": "img/image-mars.webp"
            },
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
        },
        {
            "name": "Europa",
            "images": {
                "png": "img/image-europa.png",
                "webp": "img/image-europa.webp"
            },
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
        },
        {
            "name": "Titan",
            "images": {
                "png": "img/image-titan.png",
                "webp": "img/image-titan.webp"
            },
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
        }
    ]   //i have getting error in importing data.json cos of webpack5 

    const [planets] = useState(destinations)

    const [value, setValue] = useState(0)

    const { name, images, description, distance, travel } = planets[value];

    return (
        <>
            <section className='des_box' >

                <div className="grid-container grid-destinations">

                    <div className="grid-child_1">

                        <div className="planets_container">

                            <h1 className='destinations_title' ><span style={{ opacity: 0.25 }} >01</span> Pick your destination</h1>



                            <img className="planets_img" src={images.png} alt={name} title={name} />


                        </div>

                    </div>

                    <div className="grid-child_2">

                        <div className="tab_list">
                            {
                                planets.map((item, index) => (
                                    <button className={index === value && "underline"} key={destinations} onClick={() => setValue(index)}>{item.name}</button>
                                ))
                            }
                        </div>

                        <article>

                            <h2 className='planets_title'>{name}</h2>

                            <p className='info_p planets_info'>{description}</p>

                            <div className='time_box ' >

                                <div>
                                    <h3>AVG. DISTANCE</h3>
                                    <p>{distance}</p>
                                </div>

                                <div>
                                    <h3>Est. travel time</h3>
                                    <p>{travel}</p>
                                </div>

                            </div>

                        </article>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Destination
