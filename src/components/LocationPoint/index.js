import {Sprite, useTick} from "@pixi/react";
import React, {useState} from "react";
import {EventSystem} from "@pixi/events";

let i = 0;

const LocationPoint = ({x, y}) => {

    const [delY, setDelY] = useState(0);

    useTick(delta => {
        i += 0.07 * delta;
        setDelY(delY - Math.sin(i) * 0.2);
    })

    return(
        <Sprite
            image="./location.png"
            scale={{x: 0.035 + scale, y: 0.05 + scale}}
            x={x}
            y={y + delY}
            anchor={{ x: 0.5, y: 0.5 }}
            eventMode="static"
            interactive={true}
            onmouseover={() => {console.log("HIII")}}
        />
    )
}

export default LocationPoint;