import React from 'react'
import "./home.css"
import BG from "../BackGround.mp4";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <video className='backGroundVideo' autoPlay muted loop src={BG} alt="NO Renderr"/>
        <div className="titleContainer">
            <h1 className="home-title">
               Face Detection Using ML
            </h1>
            <Link to="/details">

            <button className='title__btn'>Get Started</button>
            </Link>
        </div>
    </div>
    
  )
}

export default Home