import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,AiFillLinkedin,AiFillGithub} from "react-icons/ai";



const Home =() =>
{
    return (
        <>
        <div className="home" id="home">
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>

    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
            <p>
                We are one and only solution  to the tech problems
                 you face
                everyday.We are leading tech company whose aim is to 
                increase the
                problem solving ability in children
            </p>
        </div>

    </div>

    <div className="home3" id="about">
        <div>
        <h1>Who we are?</h1>
        <p>
        Our choice of books reflects our personality and our intellect. 
        Books tell us about new things and enrich our knowledge.
        They open the doors to a beautiful world and quicken our imagination.
        They give us company and drive away our boredom. 
        They are friends to the ones who are lonely.
        They also act as companions to the deserted.
        They brighten our lives by giving joy to the ones who are joyless and give happiness and pleasure.
        Books are our true friends because they make us better, wiser and happier.
        </p>
        </div>
    </div>


    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>

                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>

                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillLinkedin/>
                    <p>Linkedin</p>

                </div>
                <div style={{animationDelay:"0.9s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>

                </div>
                <div style={{animationDelay:"0.11s"}}>
                    <AiFillGithub/>
                    <p>Github</p>

                </div>
            </article>

        </div>
    </div>
        </>
    )
};
//dont forget this semicolon
export default Home;