import React, { useState } from 'react'
import './Pages.css';

const Crew = () => {
    const crew = [
        {
            "name": "Douglas Hurley",
            "images": {
                "png": "img/image-douglas-hurley.png",
                "webp": "img/image-douglas-hurley.webp"
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "images": {
                "png": "img/image-mark-shuttleworth.png",
                "webp": "img/image-mark-shuttleworth.webp"
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "images": {
                "png": "img/image-victor-glover.png",
                "webp": "img/image-victor-glover.webp"
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "images": {
                "png": "img/image-anousheh-ansari.png",
                "webp": "img/image-anousheh-ansari.webp"
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]
    const [people] = useState(crew)

    const [value, setValue] = useState(0)

    const { name, images, role, bio } = people[value];

    return (

        <div className='crew_box'>

            <div className="grid-container grid-area">


                <h1 className='destinations_title crew_  title' ><span style={{ opacity: 0.25 }} >02</span> Meet your crew</h1>



                <div className="tab_list tab">
                    {
                        people.map((item, index) => (
                            <button id='radio' className={index === value && "btn_active"} key={crew} onClick={() => setValue(index)}>{index + 1}</button>
                        ))
                    }
                </div>

                <article className='crew_info'>

                    <h2 className="role_info  planets_title">{role} </h2>

                    <p className='crew_name'>{name}</p>

                    <p className=" crew_bio">{bio} </p>

                </article>


                <img className="crew_img" src={images.png} alt={name} title={name} />




            </div>


        </div>
    )
}

export default Crew
