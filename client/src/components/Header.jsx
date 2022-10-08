import "../styles/header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
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
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">
                    Get rewards for your travels - unlock instant savings of 10% or more with a free tourbooking account
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <i className="ri-hotel-bed-fill headerIcon"></i>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <i className="ri-calendar-2-fill headerIcon"></i>
                        <span className="headerSearchText">date to date</span>
                    </div>
                    <div className="headerSearchItem">
                        <i className="ri-team-fill headerIcon"></i>
                        <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;