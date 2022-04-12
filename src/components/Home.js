import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';


const Home = () => {
    const Navigation = useNavigate()
    return (
        <div className="home">

            <div className='grid-container'>
                <section className='left grid-child_1'>
                    <div className="info">
                        <h1 style={{ fontWeight: 400, color: '#D0D6F9' }} >  SO, YOU WANT TO TRAVEL TO
                            <span className='span_block' >SPACE</span>
                        </h1>
                        <p className='info_p'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </section>
                <section className='right grid-child_2'>

                    <button className='circle' onClick={() => Navigation("/destination")} >EXPLORE</button>

                </section>
            </div>
        </div>
    )
}

export default Home
