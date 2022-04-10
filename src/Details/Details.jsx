import React, { useRef, useEffect, useState } from "react";
import "./details.css";
import "../Home/home.css";
import BG from "../BackGround.mp4";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import Webcam from "react-webcam";

function Details() {
  const [name, setName] = useState("");

  // WebcamComponent
  const WebcamComponent = () => <Webcam />;

  const videoConstraints = {
    width: 700,
    height: 500,
    facingMode: "user",
  };

  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  });

  return (
    <div className="details">
      <video className="backGroundVideo" autoPlay muted loop src={BG}></video>
      <div className="details__body">
        <h1>ADD DETAILS</h1>

        <div className="big__blocks">
          <div className="webcam-container">
          <div className="webcam-img">
            {image === "" ? (
              <Webcam
                audio={false}
                height={350}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={450}
                videoConstraints={videoConstraints}
              />
            ) : (
              <img src={image} />
            )}
          </div>
          <div>
            {image != "" ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                }}
                className="webcam-btn"
              >
                Retake Image
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  capture();
                }}
                className="webcam-btn"
              >
                Capture
              </button>
            )}
          </div>
          </div>

          {/* <div className="block">
                    <div className="block__icon">
                        <CameraAltIcon/>
                    </div>
                    <p className='block__text'>Take an Picture</p>
                </div>
                <div className="block-2">
                    <div className="block__icon">
                        <FlipCameraIosIcon/>
                    </div>
                    <p className='block__text'>Priview image</p>
                </div> */}
        </div>
        {/* <div className="TwoBtns">
          <button className="Btn">
            <CameraAltIcon />
            <b>Capture</b>
          </button>
          <button className="Btn">
            <b>Retake</b>
          </button>
        </div> */}

        <div className="inputHolder">
          <input
            className="NameInput"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Your Name"
          />
        </div>

        <div className="BtnContainer">
          <button
            className="Btn"
            onClick={() => {
              console.log(name);
            }}
          >
            <b>Submit</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
