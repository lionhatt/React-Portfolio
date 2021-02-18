import React from 'react';
import Grimer from '../../img/grimer2.jpg'
import "./style.css"

function About() {
    return (
        <div className="container ml-3 mt-5 mb-5">
            <div className="row">
                <div className="col-md-9 mediaQuery">
                    <div className="container mt-5 ml-1 mr-1 bg-color">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="p-3 border-bottom">About Me</h1>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-md-12">
                                <img className="ProfileImg img-thumbnail float-left mr-3" src={Grimer} alt="profile" />
                                <p>
                                    I am a Melbourne-based web developer with a background in business development management and a
                                    certificate in full stack development from Monash University. I have a diverse set of skills, ranging
                                    from HTML5, CSS3, JavaScript, Python, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory,
                                    MongoDB, MySQL, Command Line, Git, and more. In my web development project with teammates in Monash, I
                                    created a workflow process that collaborated and led our team to deliver our proposed application within
                                    the timeframe.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-3 mb-5">
                            <div className="col-md-12">
                                <p>
                                    I strive to maintain accuracy and consistency in task completion, individual performance and team
                                    goal-achievement, using acute attention to detail. Additionally, I offer collaboration, critical
                                    thinking and scheduling flexibility. My goal is to apply programming and web analytics to support
                                    increased efficiency. It is my technical expertise, passion, and leadership that make me an advantageous
                                    candidate for any team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;