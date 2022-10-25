import React from 'react';
import useFetch from '../hooks/useFetch';
import "../styles/featuredProperties.css";

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotel?featured=true&limit=2");

    return (
        <div className="featuredProperties">
            {loading ? "Loading... please wait" :
                <>
                    {data?.result?.map((item) => (
                        <div className="featuredPropertiesItem" key={item._id}>
                            <img
                                src={item.photos[0]}
                                alt="Item"
                                className="featuredPropertiesImg"
                            />
                            <span className="featuredPropertiesName">{item.name}</span>
                            <span className="featuredPropertiesCity">{item.city}</span>
                            <span className="featuredPropertiesPrice">Starting from ${item.cheapestPrice}</span>
                            {item.rating && <div className="featuredPropertiesRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    ))}
                </>}
        </div>
    );
};

export default FeaturedProperties;