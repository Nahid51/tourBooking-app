import React, { useContext, useState } from "react";
import "../styles/header.css";
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    };

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: { destination, dates, options } });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>

                <div className="headerList">
                    <div className="headerListItem active">
                        <i className="ri-hotel-bed-fill"></i>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <i className="ri-plane-fill"></i>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <i className="ri-roadster-fill"></i>
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <i className="ri-hotel-bed-fill"></i>
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <i className="ri-taxi-fill"></i>
                        <span>Airport taxis</span>
                    </div>
                </div>

                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDesc">
                            Get rewards for your travels - unlock instant savings of 10% or more with a free tourbooking account
                        </p>
                        {!user && <button className="headerBtn">Sign in / Register</button>}

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <i className="ri-hotel-bed-fill headerIcon"></i>
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <i className="ri-calendar-2-fill headerIcon"></i>
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >
                                    {`${format(dates[0].startDate, "MM/dd/yyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>

                            <div className="headerSearchItem">
                                <i className="ri-team-fill headerIcon"></i>
                                <span
                                    onClick={() => setOpenOption(!openOption)}
                                    className="headerSearchText">
                                    {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                                </span>

                                {openOption && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "d")}>-
                                            </button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("adult", "i")}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "d")}>-
                                            </button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("children", "i")}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption("room", "d")}>-
                                            </button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button
                                                className="optionCounterButton"
                                                onClick={() => handleOption("room", "i")}>+
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="headerSearchItem">
                                <button onClick={handleSearch} className="headerBtn">Search</button>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;