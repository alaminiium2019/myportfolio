import React from 'react';
import Photo from "../../../images/Alamin.JPG";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Twitter } from '@material-ui/icons';
import './About.css';

const AboutMe = () => {
    return (
        <div className="aboutbg">
            <div className="container about-part text-center">
                <div>
                    <img className="mt-4" style={{ borderRadius: '20px', border: '2px solid gray' }} src={Photo} />
                    <h1 className="pt-4">I'm MD ALAMIN</h1>
                    <h3>Web Programmer</h3>
                </div>
                <p className="text-justify text-bold">
           I want to be a lifelong learner. As a curious tech learner, I am currently exploring Web technology having the experience of the Software industry.
            In my everyday life, I try to love coding. My focus mainly on web developement. My core skills are based on JavaScript and Reactjs. I have earned masters degree in IT from International Islamic University Malaysia. Now I am open to any job offers.</p>
                <div className="d-flex text-center justify-content-center">
                    <a href="https://www.linkedin.com/in/mdalamin-2020/"><p className="pl-4"><LinkedInIcon></LinkedInIcon></p></a>
                    <a href="https://github.com/alaminiium2019"><p className="pl-4"><GitHubIcon></GitHubIcon></p></a>
                    <a href="https://www.facebook.com/alamin.iium"><p className="pl-4"><FacebookIcon></FacebookIcon></p></a>
                    <a href="https://twitter.com/MdAlaminiium"><p className="pl-4"><Twitter></Twitter></p></a>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;