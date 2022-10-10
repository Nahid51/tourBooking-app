import React from 'react';
import "../styles/featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>173 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>South Lake Tahoe</h1>
                    <h2>563 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>523 properties</h2>
                </div>
            </div>
            {/* <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Truckee</h1>
                    <h2>523 properties</h2>
                </div>
            </div> */}
        </div>
    );
};

export default Featured;