import React from "react";
import './index.css';

const InfoCard = ({title, desc}) => {
    return (
        <div id="mainCardContainer">
            <div id="title">{title}</div>
            <div id="desc">{desc}</div>
        </div>
    )
}

export default InfoCard;
