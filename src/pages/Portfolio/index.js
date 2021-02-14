import React from 'react';
import Adventurer from '../../img/Project-Adventurer.gif'
import Project2 from '../../img/Spin-that-Meal.png'
import Project1 from '../../img/WeatherWear.png'
import ReadingList from '../../img/React-Reading-List.gif'
import EmployeeDirectory from '../../img/Employee-Directory.gif'
import Burger from '../../img/Burger.gif'
import "./style.css"

function Portfolio() {

    return (
        <div className="container ml-3 mt-5 mb-5">
            <div className="row">
                <div className="col-md-9 mediaQuery">
                    <div className="container mt-5 ml-1 mr-1 mb-5 bg-color">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="p-3 border-bottom">Portfolio</h1>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <a href="https://github.com/lionhatt/Project-adventurer" title="Project-adventurer">
                                    <img className="img img-thumbnail" src={Adventurer} alt="Project-adventurer" />
                                </a>
                            </div>
                            <div className="col-md-12">
                                <h5>Project Adventurer</h5>
                            </div>
                            <div className="col-md-12">
                                <p>A MERN full-stack single page application for people enjoying the great outdoors! The application allows us to find important information on surrounding hiking trails, and interact with other users…</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <a href="https://github.com/chrisjmckeown/Spin-that-Meal" title="Spin-that-Meal">
                                    <img className="img img-thumbnail" src={Project2} alt="Spin-that-Meal" />
                                </a>
                            </div>
                            <div className="col-md-12">
                                <h5>Spin that Meal</h5>
                            </div>
                            <div className="col-md-12">
                                <p>An application that allows members to create recipes and playlists, all whilst chatting to fellow members.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <a href="https://github.com/lionhatt/project-WeatherWear" title="project-WeatherWear">
                                    <img className="img img-thumbnail" src={Project1} alt="project-WeatherWear" />
                                </a>
                            </div>
                            <div className="col-md-12">
                                <h5>WeatherWear</h5>
                            </div>
                            <div className="col-md-12">
                                <p>A JavaScript web app that helps you decide what to wear when you are going out depending on the current weather forecast. You can also look up places to eat in the local area whilst you are out.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <a href="https://github.com/lionhatt/React-Reading-List" title="React-Reading-List">
                                    <img className="img img-thumbnail" src={ReadingList} alt="React-Reading-List" />
                                </a>
                            </div>
                            <div className="col-md-12">
                                <h5>React Reading List</h5>
                            </div>
                            <div className="col-md-12">
                                <p>React Router to the Books application in order to render a book details page as well as a no match 404 page.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <a href="https://github.com/lionhatt/Employee-Directory" title="Employee-Directory">
                                    <img className="img img-thumbnail" src={EmployeeDirectory} alt="Employee-Directory" />
                                </a>
                            </div>
                            <div className="col-md-12">
                                <h5>Employee Directory</h5>
                            </div>
                            <div className="col-md-12">
                                <p>create an employee directory with React.</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <a href="https://github.com/lionhatt/burger" title="burger">
                                    <img className="img img-thumbnail" src={Burger} alt="burger" />
                                </a>
                            </div>
                            <div className="col-md-12">
                                <h5>Eat Da Burger!</h5>
                            </div>
                            <div className="col-md-12">
                                <p>Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Follow the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars to gener….</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Portfolio