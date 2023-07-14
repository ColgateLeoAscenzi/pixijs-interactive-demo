import React from "react";
import './index.css';
import {Container, Stage, useApp} from '@pixi/react';
import LocationPoint from "../LocationPoint";

const PixiOverlay = ({setShowCard, locationInfo}) => {

    return (
        <Stage id="mainPixiContainer" options={{ backgroundAlpha: 0}} >
            {locationInfo.map(({id, x, y}, i) => {
                return (
                    <LocationPoint
                        setShowCard={setShowCard}
                        id={id}
                        x={x}
                        y={y}
                        key={i}
                    />
                )
            })}
        </Stage>
    )
}

export default PixiOverlay;
