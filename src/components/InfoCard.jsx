import React from "react";
import './product.css';

const InfoCard = ({info1,info2,info3,info4,info5,info6,plantype,price, cssfronttype,cssbacktype,size = []}) => {

    const ProductCard = size.map;

    return (
        <div className="col-1-of-3">
        <div className="card">
            <div className={cssfronttype}>
                <div className="card__title card__title--1">
                    <i className="fas fa-paper-plane"></i>
                    <h4 className="card__heading">{plantype}</h4>
                </div>

                <div className="card__details">
                    <ul>
                        {ProductCard}
                    </ul>
                </div>
            </div>
            <div className={cssbacktype}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">{price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Select</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default InfoCard;