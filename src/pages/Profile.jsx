import me from "../assets/me.jpeg";

export default function Profile(){
    return(<>
        <div className="profile">
            <img src={me} alt="Photo Profile" className="profile-image"></img>
        </div>
        <div className="identity">
            <h2>Vito Orlando Aroditya</h2>
            <h3>vitoaroditya08@gmail.com</h3>
        </div>
        </>
    );
}