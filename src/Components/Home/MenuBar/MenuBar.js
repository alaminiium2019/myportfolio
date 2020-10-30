import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand text-white" href="/">MA</a>
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="https://drive.google.com/file/d/1_6z2yOT1WX7gzhM9mT_rvZnfVvRdosEp/view?usp=sharing">Download CV</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default MenuBar;