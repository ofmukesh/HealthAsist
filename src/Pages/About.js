import React from 'react';
import mukesh from "../Assets/images/mukesh.jpg";
import ankush from "../Assets/images/ankush.jpg";
import abhishek from "../Assets/images/abhishek.jpg";
import sharda from "../Assets/images/sharda.png";

function About() {
    return (
        <div className='container'>
            <h1>Our Team</h1>
            <div class="row row-cols-1 row-cols-md-4 g-5">
            <div class="col ">
                <div class="card h-100 card-back">
                <img src={ankush} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Ankush mehra</h5>
                    <p class="card-text text-dark">I'm a 2nd year student of  B.tech CSE at UIET, MDU, Rohtak.
        My main expertise lies in  designing,CP,devlopment, open source and the learning continuous..</p>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card h-100 card-back">
            <img src={mukesh} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Mukesh</h5>
                <p class="card-text text-dark">I'm a 2nd year student of  B.tech ME at UIET, MDU, Rohtak.
                        My main expertise lies in Full Stack Web dev and the learning continuous..</p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card h-100 card-back">
            <img src={abhishek} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Abhishek Gupta</h5>
                <p class="card-text text-dark">I'm a 2nd year student of  B.tech ECE at UIET, MDU, Rohtak.
                       My main expertise lies in CP, Full Stack Web dev, open source and the learning continuous..</p>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card h-100 card-back">
            <img src={sharda}class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">sharda Maurya</h5>
                <p class="card-text text-dark">I'm Btech CSE student of UIET, MDU, Rohtak.
                    MY expertise are lies in front end devlopment, designing and countinous learning..</p>
            </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default About