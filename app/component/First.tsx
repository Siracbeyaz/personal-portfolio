import Image from "next/image";
import man from "../../public/Group 11 1.png";
import "./First.css";

export default function First() {
    return (
        <main className="main">
            <div className="maindiv">
                <div className="textdiv">
                    <p className="headline">Hey I'am Jhon </p>
                    <h2>
                        I create <span>product design</span> and brand experience
                    </h2>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.
                    </p>
                    <button className="button">Get in Touch</button>
                </div>
                <div className="mainimg">
                    <Image src={man} alt="man" width={600} height={600}/>
                </div>
            </div>
        </main>
    );
}
