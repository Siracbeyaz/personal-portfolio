import Image from "next/image";
import abt from "../../public/About Me.png"
import "./About.css"



export default function About() {
    return(
        <main>
            <div className="Mainabout">
                <div className="Img">
                    <Image src={abt} alt="about" width={700} height={700}></Image>
                </div>
                <div className="Text">
                    <p className="about">About</p>
                    <h2>About Me</h2>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce varius faucibus massa sollicitudin amet augue. 
                        Nibh metus a semper purus mauris duis. Lorem eu neque,
                        tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in 
                        amet pellentesque. <br /> <br />

                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
                        Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </div>
        </main>
    )
}

