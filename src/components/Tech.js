import React, { useState } from 'react'
import './Pages.css';

const Tech = () => {

    const technology = [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": "img/image-launch-vehicle-portrait.jpg",
                "landscape": "img/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": "img/image-spaceport-portrait.jpg",
                "landscape": "img/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": "img/image-space-capsule-portrait.jpg",
                "landscape": "img/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const [rocket] = useState(technology)

    const [value, setValue] = useState(0)

    const { name, images, description } = rocket[value];

    return (
        <div className='tech_box'>

            <div className="grid-area-tech">


                <h1 className='destinations_title title' ><span style={{ opacity: 0.25 }} >03</span> SPACE LAUNCH 101</h1>


                <div className="tab_list button">
                    {
                        rocket.map((item, index) => (
                            <button id='radio' className={index === value && "btn_active"} key={technology} onClick={() => { setValue(index) }}>{index + 1}</button>
                        ))
                    }
                </div>

                <article className='tech_details'>

                    <p className='info_title'>THE TERMINOLOGY…</p>

                    <h2 className="tech_h2"> {name}</h2>

                    <p className='tech_info'>{description} </p>

                </article>

                <picture className='tech_img'>
                    <source media="(min-width:1024px )" srcSet={images.portrait} />
                    <img className="planets_img" style={{ maxWidth: "100%" }} src={images.landscape} alt={name} title={name} />
                </picture>

            </div>

        </div>
    )
}

export default Tech
