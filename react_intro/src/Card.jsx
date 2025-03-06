import profilePic from "./assets/profile.jpeg";

function Card() {
    return (
        <div className="card">
            <div className="img">
                <img src={profilePic} alt="profile picture"></img>
            </div>
            <div className="details">
                <h1>Tebogo Malebana</h1>
                <p>
                    Software developer with 5 years experience and a WeThinkCode
                    graduate.
                </p>
            </div>
        </div>
    );
}

export default Card;
