import React from 'react'
import emailJs from 'emailjs-com'
import "./style.css"

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailJs.sendForm('service_sle8clw', 'template_qxt0963', e.target, 'user_lPuQ9uhdSlhO6NBP2TrRb')
            .then((result) => {
                console.log(result.text);
                setTimeout(function(){ alert("Sent Successfully!"); }, 3000);
                document.getElementById("contactForm").reset()
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="container ml-3 mt-5 mb-5">
            <div className="row">
                <div className="col-md-9 mediaQuery">
                    <div className="container mt-5 ml-1 mr-1 bg-color">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="p-3 border-bottom">Contact</h1>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-md-10">
                                <form className="p-2" onSubmit={sendEmail} id="contactForm">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name</label>
                                        <input name="name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name (required)" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Email address</label>
                                        <input name="email" type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email (required)" />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                                        <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <button className="btn btn-primary mb-5" type="submit">Submit</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact