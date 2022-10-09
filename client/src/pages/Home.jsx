import Featured from "../components/Featured";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import "../styles/home.css";

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <div className="homeContainer">
                <Featured />
            </div>
        </div>
    );
};

export default Home;