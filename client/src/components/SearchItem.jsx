import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/searchItem.css";

const SearchItem = ({ item }) => {
    const { _id, photos, name, distance, desc, rating, cheapestPrice } = item;
    return (
        <div className="searchItem">
            <img
                src={photos[0]}
                alt="ItemImage"
                className="searchItemImg"
            />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">{name}</h1>
                <span className="searchItemDistance">{distance}m from center</span>
                <span className="searchItemTaxiOp">Free airport taxi</span>
                <span className="searchItemSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="searchItemFeatures">
                    {desc}
                </span>
                <span className="searchItemCancelOp">Free cancellation </span>
                <span className="searchItemCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="searchItemDetails">
                {rating &&
                    <div className="searchItemRating">
                        <span>Excellent</span>
                        <button>{rating}</button>
                    </div>}
                <div className="searchItemDetailTexts">
                    <span className="searchItemPrice">${cheapestPrice}</span>
                    <span className="searchItemTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${_id}`}>
                        <button className="searchItemCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;