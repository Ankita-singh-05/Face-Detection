import React , {useState} from 'react'
import "./details.css"
import "../Home/home.css"
import BG from "../BackGround.mp4";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';

function Details() {
    const [name , setName] = useState("")
  return (
    <div className='details'>
        <video className='backGroundVideo' autoPlay muted loop src={BG}></video>
        <div className="details__body">
            <h1>ADD DETAILS</h1>
            <div className="big__blocks">
                <div className="block">
                    <div className="block__icon">
                        <CameraAltIcon/>
                    </div>
                    <p className='block__text'>Take an Picture</p>
                </div>
                <div className="block">
                    <div className="block__icon">
                        <FlipCameraIosIcon/>
                    </div>
                    <p className='block__text'>Priview image</p>
                </div>
            </div>
            <div className="TwoBtns">
                <button className='Btn'><CameraAltIcon/><b>Capture</b></button>
                <button className='Btn'><CameraAltIcon/><b>Capture</b></button>
            </div>
            <div className="inputHolder">

            <input className="NameInput" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name" />
            </div>
            <div className="BtnContainer">

            <button className='Btn' onClick={()=>{console.log(name)}}><CameraAltIcon/><b>Submit</b></button>
            </div>
        </div>

    </div>
  )
}

export default Details