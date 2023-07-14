import {Sprite, useTick} from "@pixi/react";
import React, {useEffect, useState} from "react";
import {EventSystem} from "@pixi/events";
import InfoCard from "../InfoCard";

let i = 0;

const LocationPoint = ({setShowCard, id, x, y, showCard}) => {

    const [delY, setDelY] = useState(0);

    useTick(delta => {
        i += 0.07 * delta;
        setDelY(delY - Math.sin(i) * 0.2);
    })

    return(
        <Sprite
            id="sprite"
            image="./location.png"
            scale={{x: 0.035, y: 0.05}}
            x={window.innerWidth * x}
            y={(window.innerHeight * y) + delY}
            anchor={{ x: 0.5, y: 0.5 }}
            eventMode="static"
            interactive={true}
            pointerdown={() => {setShowCard(id)}}
        />
    )
}

export default LocationPoint;