import React from "react";
import academyImg from "../assets/images/academy.jpg";
import "./style.css";

function About() {
    return (
        <div className="container white md">
            <br />
            <div className="row">
                <h1 className="col-12">About</h1>
            </div>

            <hr />
            <br />
            <div className="row">
                <div className="col-12">
                    <div className="contain">
                        <img className="about profImg" src={academyImg} alt="a place kitten" />
                        <div className="bottom-left">
                            <p>*Jonathon on left of image*</p>
                        </div>
                    </div>

                    <p>
                        My name is Jonathon Condon and I'm a Front and Back End Web Developer. I am young, and that affords me the opportunity to look for whatever I might aspire to accomplish. I truly feel this is the time of my life when I should reach out and begin building the business and professional side of my repertoire. I have recently graduated the UW Coding Bootcamp Program and am now working in professional teams and enviroments to garner further knowledge and understanding about web development and coding. I have worked in several groups and teams to complete projects, including using API data to create in-depth web applications designed to give a personalized experience to the user based on the returned responses.
                </p>

                    <div>
                        <h2>My info and resources:</h2>
                        <div className="infoText">
                            <p>Jonathon Condon <br />
                        jcondonpro@gmail.com <br />
                        (206)-359-0757</p>
                        </div>
                        <a target="blank" href="https://www.linkedin.com/in/jonathon-condon-a983a31b9">My LinkedIn Profile</a>
                        <br />
                        <a target="blank" href="https://github.com/JCDon">My GitHub Profile</a>
                        <br />
                        <a target="blank" href="https://docs.google.com/document/d/12ZBXb-7pSARbruXJ8glbuLdeg7tBzpB4RFAoGBSh9Z8/edit?usp=sharing">My Resume</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;