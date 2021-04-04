import React from 'react';
import Modelone from '../asset/resource/1.jpg';
import Modeltwo from '../asset/resource/2.jpg';
import Modelthree from '../asset/resource/3.jpg';

export default class Product extends React.Component {
    render() {
        return (
            <>
            {/* Product Content */}
    <div className="container">
        <div className="product-area">
            <h2 className="product-head">Feature Product</h2>
        </div>
        <div className="row">
            <div className="column">
                <div className="product-cart">
                    <ul className="product-list">
                        <li className="product-item">
                            <a href="product-link"><img className="product-img" src={Modelone} /></a>
                        </li>
                        <li className="product-item">
                            <a href="product-link"><img className="product-img" src={Modeltwo} /></a>
                        </li>
                        <li className="product-item">
                            <a href="product-link"><img className="product-img" src={Modelthree} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
            </>
        )
    }
}
