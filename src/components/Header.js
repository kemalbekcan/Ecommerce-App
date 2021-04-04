import React from 'react';
import Slider from './Slider';
import Logo from '../asset/resource/Silon. .svg';
import Logodot from '../asset/resource/Silondot.svg';
import Product from './Product';


export default class Header extends React.Component{
    render(){
        return(
            <>
            <header>
        <div className="container">
            <div className="row align-center justify-content-between">
                <div className="column">
                    <a href="#" className="logo" title="logo" aria-label="logo">
                       <img src={Logo} alt="Logo" /><img src={Logodot} />
                    </a>
                </div>
                <div className="column">
                    {/* Navigation */}
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <a href="" className="navigation-link">HOME</a>
                            </li>
                            <li class="navigation-item">
                                <a href="" className="navigation-link">SHOP</a>
                            </li>
                            <li class="navigation-item">
                                <a href="" className="navigation-link">PRODUCTS</a>
                            </li>
                            <li class="navigation-item">
                                <a href="" className="navigation-link">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* 
                Navigation İcon 
                İcon have a problem
                */}
                <div className="column">
                    <ul className="navigation-right">
                        <li className="right-item">
                            <a href="" className="search"><i className="fas fa-search"></i></a>
                        </li>
                        <li class="right-item">
                            <a href="" className="cart"><i className="fas fa-shopping-cart"></i></a>  
                        </li>
                        <li class="right-item">
                            <a href="" className="heart"><i className="far fa-heart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <Slider />
    <Product />
            </>
        );
    }
}
