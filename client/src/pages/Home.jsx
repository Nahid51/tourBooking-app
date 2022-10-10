import Featured from "../components/Featured";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import PropertyList from "../components/PropertyList";
import "../styles/home.css";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
            </div>
        </div>
    );
};

export default Home;