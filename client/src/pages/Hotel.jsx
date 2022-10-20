import React, { useState } from 'react';
import { photos } from '../assets/data';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Navigation from '../components/Navigation';
import "../styles/hotel.css";

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "left") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div>
            <Navigation />
            <Header type="list" />
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <i
                            className="ri-close-circle-line close"
                            onClick={() => setOpen(false)}
                        ></i>
                        <i
                            className="ri-arrow-left-circle-line arrow"
                            onClick={() => handleMove("left")}
                        ></i>
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].imgLink} alt="" className="sliderImg" />
                        </div>
                        <i
                            className="ri-arrow-right-circle-line arrow"
                            onClick={() => handleMove("right")}
                        ></i>
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Reverse or Book Now!</button>
                    <div className="hotelTitle">Grand Hotel</div>
                    <div className="hotelAddress">
                        <i className="ri-map-pin-fill"></i>
                        <span>Clinton st 126 Washington DC</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $115 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, index) => (
                                <div className="hotelImgWrapper" key={index} >
                                    <img
                                        onClick={() => handleOpen(index)}
                                        src={photo.imgLink}
                                        alt=""
                                        className="hotelImg"
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis architecto commodi qui velit eum dolorum voluptatibus quisquam sit tenetur repellendus obcaecati neque perspiciatis facere accusantium, repellat reprehenderit dolorem suscipit? Quasi necessitatibus quia, mollitia accusamus beatae unde tempore at labore voluptatem. Sit nemo, natus accusantium sint odit rem. Quibusdam eius alias provident, harum accusantium mollitia voluptatum facere dolores et voluptatibus? Dolor, veritatis magni. Incidunt exercitationem modi at aut ipsum itaque!
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 10-night stay!</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus.</span>
                            <h2><b>$545</b> (10 nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;