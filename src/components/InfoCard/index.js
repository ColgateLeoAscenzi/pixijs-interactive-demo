import React from "react";
import './index.css';

const InfoCard = ({title, desc, imgURL, setShowCard}) => {
    return (
        <div id="mainCardContainer">
            <div id="title">{title}<div id="closeButton" onClick={() => {setShowCard(-1)}}>CLOSE</div></div>
            <img id="img" src={imgURL}/>
            <div id="desc">{desc}</div>
        </div>
    )
}

export default InfoCard;
