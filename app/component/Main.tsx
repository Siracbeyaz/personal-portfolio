import Image from "next/image";
import Logo from "../../public/Logo.png"
import Button from "../../public/Button.png"
import "./Main.css"

export default function Home() {
    return (
        <main>
            <div className="navbar">
                <div className="navimg">
                    <Image src={Logo} alt="Logo" width={186} height={40}></Image>
                </div>

                <div className="navtext" >
                    <p>Home</p>
                    <p>Portfolio</p>
                    <p>About me</p>
                    <p>Testimonials</p>
                </div>

                <div className="navbutton" >
                    <button><Image src={Button} alt="Button" width={170} height={69}></Image></button>
                </div>
            </div>
        </main>
    );
}
