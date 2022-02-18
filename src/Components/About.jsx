import React from "react";

const About = () => {
    return(
    <div className="aboutContainer" >
        <div className="aboutImage">
            <img src={process.env.PUBLIC_URL + "./images/photo.jpg"} alt="developer"></img>
        </div>

        <div className="aboutInfo">
            <h1>So You Found Me!</h1>
            <hr />
            <br />
            <h3>I am a developer and music lover! From Australia who lives to design and develop/create new things be it in 
                IT or Robotics, Electronics or Music
            </h3>
            <br />
            <p>I have a range of experience in diffrient technologies but find my self to be strong 
                with c#, python, java, and web technologies</p>
            <div className="faHandler">
                <a href="https://github.com/3li4m" ><i class="fa-class fa-brands fa-github"></i></a>
                <a href = "mailto: contacteliea@gmail.com" ><i class="fa-class fa-solid fa-envelope-open"></i></a>
                <a href="https://cenodigital.github.io/" ><i class="fa-class fa-solid fa-address-card"></i></a>
            </div>
        </div>
    </div>
    );
} 


export default About;