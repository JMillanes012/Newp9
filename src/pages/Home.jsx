import "../Home.css";

function Home() {
    return (
        <div id="bg">
            <div className="container">
                <h1 className="text-center">You are under my Genjutsu already</h1>
                <p className="subheading text-center">Welcome to my domain. Prepare to be mesmerized!</p>
                <div className="cta-buttons">
                    <button className="cta-btn">Enter the Genjutsu</button>
                    <button className="cta-btn">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
