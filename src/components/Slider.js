import React from 'react';
import Background from '../asset/resource/BG.svg';
import Manken from '../asset/resource/ban-1.png';

export default class Slider extends React.Component {
    render() {
        return (
            <>
            {/*Slider */}
    <div className="slider">
        <div className="slider-content">
            <img className="slider-img" src={Background} alt="background" />
            <img className="slider-women" src={Manken} />
            <h2 className="slider-p">ULTIMATE COLLECTION<br />Complete Women<br />Fashion Here</h2>
            <a href="#" className="slider-button">SHOP</a>
        </div>
    </div>
            </>
        )
    }
}
