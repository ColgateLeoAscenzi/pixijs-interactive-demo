import './App.css';
import PixiOverlay from "./components/PixiOverlay";
import InfoCard from "./components/InfoCard";
import {useState} from "react";

function App() {

    const [showCard, setShowCard] = useState(-1);

    const locationInfo = [
        {
            id: 0,
            x: 0.3683,
            y: 0.2057,
        },
        {
            id: 1,
            x: 0.2083,
            y: 0.1057,
        }
    ]

    const cardInfo = [
        {
            title: "La Orotava",
            desc: "This is some ChatGPT stuff: Step into the otherworldly beauty of La Orotava on Mars, as witnessed by the Perseverance Rover. Nestled amidst rugged Martian terrain, this captivating landscape showcases towering red-rock formations that mimic the grandeur of its earthly namesake. Delicate wisps of crimson dust dance in the gentle breeze, unveiling a surreal vista of ancient riverbeds and eroded cliffs. Against the backdrop of a dusky Martian sky, La Orotava stands as a testament to the enchanting wonders that await us on the Red Planet.",
            imgURL: "./laorotava.jpg"
        },
        {
            title: "Hahóóts''aa",
            desc: "Also ChatGPT LOL: Venture into the treacherous realm of Hahóóts''aa on Mars, a hauntingly beautiful yet perilous landscape witnessed through the eyes of the Perseverance Rover. In this unforgiving expanse, jagged peaks pierce the crimson horizon, casting an ominous shadow over the desolate terrain. The air, thin and suffused with toxic gases, renders every breath a potential threat to human life. Beware the deceptive tranquility as swirling sandstorms unleash their fury, engulfing unsuspecting explorers in a lethal dance of abrasive particles. Hahóóts''aa stands as a haunting reminder of Mars' formidable nature, reminding us of the inherent dangers that await those who dare to venture too far.",
            imgURL: "./hahoots.jpg"
        }
    ]

    return (
        <div className="App" id="app">
            <video autoPlay muted loop id="backgroundVideo">
                <source src="./perserverencePath.mp4" type="video/mp4"/>
            </video>
            <PixiOverlay
                setShowCard={setShowCard}
                locationInfo={locationInfo}
            />
            {showCard != -1 && (
                <InfoCard
                    title={cardInfo[showCard].title}
                    desc={cardInfo[showCard].desc}
                    imgURL={cardInfo[showCard].imgURL}
                    setShowCard={setShowCard}
                />
            )}

        </div>
    );
}

export default App;
