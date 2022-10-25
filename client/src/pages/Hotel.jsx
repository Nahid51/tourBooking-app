import React, { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Navigation from '../components/Navigation';
import { AuthContext } from '../context/AuthContext';
import { SearchContext } from '../context/SearchContext';
import useFetch from '../hooks/useFetch';
import "../styles/hotel.css";

const Hotel = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { data, loading, error } = useFetch(`/hotel/find/${id}`);
    const { user } = useContext(AuthContext);

    const { dates, options } = useContext(SearchContext);
    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);

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

    const handleBooking = () => {
        if (user) {
            setOpenModal(true);

        } else {
            navigate("/login")
        }
    };

    return (
        <div>
            <Navigation />
            <Header type="list" />
            {loading ? "Loading... please wait" :
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
                                <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                            </div>
                            <i
                                className="ri-arrow-right-circle-line arrow"
                                onClick={() => handleMove("right")}
                            ></i>
                        </div>
                    )}
                    <div className="hotelWrapper">
                        <button className="bookNow">Reverse or Book Now!</button>
                        <div className="hotelTitle">{data.name}</div>
                        <div className="hotelAddress">
                            <i className="ri-map-pin-fill"></i>
                            <span>{data.address}</span>
                        </div>
                        <span className="hotelDistance">
                            Excellent location - {data.distance}m from center
                        </span>
                        <span className="hotelPriceHighlight">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>
                        <div className="hotelImages">
                            {
                                data?.photos?.map((photo, index) => (
                                    <div className="hotelImgWrapper" key={index} >
                                        <img
                                            onClick={() => handleOpen(index)}
                                            src={photo}
                                            alt=""
                                            className="hotelImg"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDesc">
                                    {data.desc}
                                </p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a {days}-night stay!</h1>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus.</span>
                                <h2><b>${days * data.cheapestPrice * options.room}</b> ({days} nights)</h2>
                                <button onClick={handleBooking}>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>}
        </div>
    );
};

export default Hotel;