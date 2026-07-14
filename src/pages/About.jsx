import {useState} from "react";
import cmd from "../assets/cmdcheckversion.png";

export default function About() {

    const [open, setOpen] = useState(false);

    return (<>
        <h1>Hasil Pelatihan</h1>
        <div className="about">
            <button 
                className="btn"
                onClick={()=> setOpen(!open)}
            >
                React JS {open? "▲" : "▼"}
            </button>

            {open &&(
                <div className="materi">
                    <h3>Apa itu React JS?</h3>
                    <p>React adalah JavaScript library yang digunakan untuk membuat user interface</p>
                    <br/>
                    <h3>Keunggulan</h3>
                    <ol>
                        <li>Ukurannya kecil dan ringan</li>
                        <li>Bebas/Fleksibel</li>
                        <li>Simpel dan ngga ribet</li>
                    </ol>
                    <br/>
                    <h3>3 Pilar Utama React</h3>
                    <ol>
                        <li>Komponen</li>
                        <p>Komponen merupakan salah satu cara untuk membuat code lebih ringkas. Komponen bekerja seperti template yang dapat digunakan berulang-kali hanya dengan memanggil nama function atau class</p>
                        <li>Deklaratif</li>
                        <p>Comming soon...</p>
                        <li>Aliran data Searah</li>
                        <p>Comming soon...</p>
                    </ol>
                    <br/>
                    <h3>Install Node.js</h3>
                    <p>Buka link ini untuk download {""}
                        <a href="https://nodejs.org/en/download"
                            target="blank"
                            rel="noopener noreferrer">Node.js</a>. Lalu install file .msi
                    </p>
                    <p>cek apakah node dan npm sudah terinstall dengan mengetik ini di cmd :
                        <br/> <img src={cmd} className="imgver"></img>
                    </p>
                    <br/>
                    <h3>Membuat project dengan react</h3>
                    <p></p>
                </div>
            )}
        </div>
        </>
    );
}