import me from "../assets/me.jpeg";

export default function Profile() {
    return (
        <section className="profile-section">

            <div className="profile-card">

                <div className="profile-left">
                    <img
                        src={me}
                        alt="Profile"
                        className="profile-image"
                    />
                </div>

                <div className="profile-right">

                    <span className="profile-tag">
                        Backend Engineer
                    </span>

                    <h1>
                        Vito Orlando Aroditya
                    </h1>

                    <p className="profile-email">
                        vitoaroditya08@gmail.com
                    </p>

                    <div className="profile-divider"></div>

                    <p className="profile-description">
                        Saya merupakan siswa SMK yang memiliki minat dalam
                        pengembangan website dan aplikasi desktop modern.
                        Saya senang mempelajari hal baru serta membangun
                        aplikasi dengan tampilan yang bersih, responsif,
                        dan mudah digunakan.
                    </p>

                </div>

            </div>

        </section>
    );
}