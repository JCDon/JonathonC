import React from "react";
import "./style.css"

import project1_1 from "../assets/images/project1addevent.png"
import project1_2 from "../assets/images/project1month.png"
import project1_3 from "../assets/images/project1week.png"
import project1_4 from "../assets/images/project1front.png"

import workDay from "../assets/images/WorkDayDay.png"
import workNight from "../assets/images/WorkDayNight.png"

import pizzaAbout from "../assets/images/pizzacutterAbout.png"
import pizzaContact from "../assets/images/pizzacutterContact.png"
import pizzaMain from "../assets/images/pizzacutterMain.png"
import pizzaMenu from "../assets/images/pizzacutterMenu.png"


function Portfolio () {
    return (
        <div className="container white md boxWidth">
        <br/>
        <div className="row">
            <h1 className="col-12">My Portfolio Demos</h1>
        </div>

        <hr/>

        <div className="row">
            <div className="col-12 justify-content-between">
                <div>
                    <a target="blank" href="https://z1springer.github.io/what_to_do/">
                        <h2 className="linkcolor">What To Do?: Calender App</h2>
                    </a>
                    <a href="https://github.com/Z1springer/what_to_do">https://github.com/Z1springer/what_to_do</a>
                    <p>This project was designed to work as a fully functional calender, with a day, week, and month
                        view. It also generates random events from the user-specified category to offer ideas for what
                        to do when you have no clue what could make your boredom go away!</p>
                    <hr/>
                    <img className="img imgFit" src={project1_1} alt="front page"/>
                    <img className="img imgFit" src={project1_2} alt="week view"/>
                    <img className="img imgFit" src={project1_3} alt="month"/>
                    <img className="img imgFit" src={project1_4} alt="add event"/>
                </div>
                <div>
                    <a href="https://pizzacutterapp.herokuapp.com/pizzacutter" target="blank">
                        <h2 className="linkcolor">Pizza Cutter's</h2>
                    </a>
                    <a href="https://github.com/zhuxiaoyu1019/online-order-system">https://github.com/zhuxiaoyu1019/online-order-system</a>
                    <p>This app was created for a real customer who owns a small local pizza restaraunt. He had issues with his static site and wanted a more heavy-weight application that could be edited and updated from within the site via an owners dashboard. It also contains a user dashboard for restaraunt customers to view menu items and prepare an order.</p>
                    <hr/>
                    <img className="img imgFit" src={pizzaMain} alt="a photo of the main page"/>
                    <img className="img imgFit" src={pizzaMenu} alt="a photo of the menu page"/>
                    <img className="img imgFit" src={pizzaAbout} alt="a photo of the about page"/>
                    <img className="img imgFit" src={pizzaContact} alt="a photo of contact page"/>
                </div>
                <div>
    
                    <a target="blank" href="https://jcdon.github.io/DailyPlannerJCC/">
                        <h2 className="linkcolor">Work Day Scheduler</h2>
                    </a>
                    <a href="https://github.com/JCDon/DailyPlannerJCC">https://github.com/JCDon/DailyPlannerJCC</a>
                    <p>This project featured local storage, and was designed to display an 9 hr day and have events
                        saveable to the users local system. Then, the user could return to their schedule later to check
                        off or intiate new future plans.</p>
                    <hr/>
                    <img className="img imgFit" src={workDay} alt="work scheduler day view"/>
                    <img className="img imgFit" src={workNight} alt="work shceduler night view"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Portfolio;