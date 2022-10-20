import React, { useState } from 'react';
import "../styles/list.css";
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../components/SearchItem';

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);

    return (
        <div>
            <Navigation />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="listItem">
                            <label>Check in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="listItem">
                            <label>Options</label>
                            <div className="listOptions">
                                <div className="listOptionItem">
                                    <span className="listOptionText">Minimum Price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className='listOptionInput'
                                    />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Maximum Price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className='listOptionInput'
                                    />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Adult</span>
                                    <input
                                        type="number"
                                        className='listOptionInput'
                                        min={1}
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Children</span>
                                    <input
                                        type="number"
                                        className='listOptionInput'
                                        min={0}
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Room</span>
                                    <input
                                        type="number"
                                        className='listOptionInput'
                                        min={1}
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>

                    <div className='listResult'>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;