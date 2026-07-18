import dayOne from "../assets/dayonehasil.png";
import dayTwo from "../assets/daytwohasil.png";
import dayThree from "../assets/daythreehasil.png";
import dayFour from "../assets/dayfourhasil.png";

export default function About() {
    return (
        <section className="about">

            <header className="about-header">

                <h1>Learning Journey</h1>

                <p>
                    Selama pelatihan saya mempelajari berbagai teknologi
                    mulai dari pengembangan website, deployment,
                    Artificial Intelligence, hingga Internet of Things.
                </p>

            </header>

            <div className="journey">

                <article className="journey-card">

                    <div className="journey-content">

                        <span className="card-tag">
                            Day One
                        </span>

                        <h2>React JS & GitHub</h2>

                        <p>
                            Hari pertama berfokus pada pengenalan React JS
                            untuk membangun website modern serta mempelajari
                            Git dan GitHub sebagai Version Control dalam
                            mengelola source code.
                        </p>

                        <div className="card-list">

                            <span>React Components</span>
                            <span>JSX</span>
                            <span>State & Props</span>
                            <span>Git</span>
                            <span>GitHub</span>

                        </div>

                        <div className="journey-actions">
                            <a
                                href="https://projek-enuma.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                🌐 Live Demo
                            </a>
                        </div>

                        <br/>
                        <div className="journey-image">
                            <img
                                src={dayOne}
                                alt="Day One"
                            />
                        </div>

                    </div>

                </article>
                <br/>

                <article className="journey-card">

                    <div className="journey-content">

                        <span className="card-tag">
                            Day Two
                        </span>

                        <h2>Supabase & Vercel</h2>

                        <p>
                            Membangun website yang terhubung dengan database
                            Supabase menggunakan bantuan Antigravity AI,
                            kemudian melakukan deployment ke Vercel agar
                            aplikasi dapat diakses secara online.
                        </p>

                        <div className="card-list">

                            <span>Supabase</span>
                            <span>Authentication</span>
                            <span>Database</span>
                            <span>Storage</span>
                            <span>Antigravity</span>
                            <span>Vercel</span>

                        </div>

                        <div className="journey-actions">
                            <a
                                href="https://cloud-edu-omega.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                🌐 Live Demo
                            </a>
                        </div>

                        <br/>
                        <div className="journey-image">
                            <img
                                src={dayTwo}
                                alt="Day Two"
                            />
                        </div>

                    </div>

                </article>

                <br/>
                <article className="journey-card">

                    <div className="journey-content">

                        <span className="card-tag">
                            Day Three
                        </span>

                        <h2>Artificial Intelligence</h2>

                        <p>
                            Mempelajari pemanfaatan AI dalam proses
                            pengembangan aplikasi menggunakan Antigravity
                            serta 9Router untuk mengakses berbagai model AI
                            dalam satu platform.
                        </p>

                        <div className="card-list">

                            <span>Artificial Intelligence</span>
                            <span>Antigravity</span>
                            <span>9Router</span>
                            <span>Prompt Engineering</span>

                        </div>

                        <div className="journey-actions">
                            <a
                                href="https://enuma-portofolio.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                🌐 Live Demo
                            </a>
                        </div>

                        <br/>
                        
                        <div className="journey-image">
                            <img
                                src={dayThree}
                                alt="Day Three"
                            />
                        </div>

                    </div>

                </article>

                <article className="journey-card">

                    <div className="journey-content">

                        <span className="card-tag">
                            Day Four
                        </span>

                        <h2>Internet of Things</h2>

                        <p>
                            Mempelajari dasar Internet of Things menggunakan
                            ESP32 pada simulator Wokwi, menghubungkan sensor
                            dengan Firebase Realtime Database serta
                            menampilkan data secara realtime.
                        </p>

                        <div className="card-list">

                            <span>ESP32</span>
                            <span>Wokwi</span>
                            <span>Firebase</span>
                            <span>IoT</span>
                            <span>LCD Display</span>

                        </div>

                        <div className="journey-actions">
                            <a
                                href="/files/iot-wokwi-project.zip"
                                download="IoT-Wokwi-Project.zip"
                                className="btn-primary"
                            >
                                📦 Download Wokwi Project
                            </a>
                        </div>

                        <br/>

                        <div className="journey-image">
                            <img
                                src={dayFour}
                                alt="Day Four"
                            />
                        </div>

                    </div>

                </article>

            </div>

        </section>
    );
}