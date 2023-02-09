import react from "react"
import "./slider.scss"
import action from "../../../assets/logo/action.png"
import action1 from "../../../assets/logo/action1.png"
import image1 from "../../../assets/LandingPage/image1.jpg"
import image2 from "../../../assets/LandingPage/image2.jpg"
import image3 from "../../../assets/LandingPage/image3.jpg"



export const Slider = () => {
    return (
        <div className="slider">
            <div className="container">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div className="cards">
                    <label className="card" htmlFor="item-1" id="song-1">
                        <img src={image1} alt="song" />
                    </label>
                    <label className="card" htmlFor="item-2" id="song-2">
                        <img src={image2} alt="song" />
                    </label>
                    <label className="card" htmlFor="item-3" id="song-3">
                        <img src={image3} alt="song" />
                    </label>
                </div>
            </div>
        </div>
    )
}