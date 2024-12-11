import { Link } from 'react-router-dom';
import '../App.css';
function Home() {
    return (
        <div id="bg">
            <div className="container">
                <h1 className="text-center">You are under my Genjutsu already</h1>
                <p className="subheading text-center">Welcome to my domain. Prepare to be mesmerized!</p>
                <div className="cta-buttons">
                    <Link to="/genjutsu">
                        <button className="cta-btn">Enter the Genjutsu</button>
                    </Link>
                    <Link to="/learn-more">
                        <button className="cta-btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
