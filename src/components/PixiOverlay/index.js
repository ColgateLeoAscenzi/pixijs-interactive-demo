import React from "react";
import './index.css';
import {Stage} from '@pixi/react';
import LocationPoint from "../LocationPoint";


const PixiOverlay = () => {
    return (
        <Stage id="mainPixiContainer" options={{ backgroundAlpha: 0}} >
            <LocationPoint x = {660} y = {185}/>
        </Stage>
    )
}

export default PixiOverlay;
