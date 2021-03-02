import React from "react";
import Form from "../components/form/index";
import "./style.css";

function Contact () {
    return (
        <div className="container white md">
        <br/>
        <div className="row">
            <h1 className="col-12">Contact</h1>
        </div>

        <hr/>
        <br/>
        <div className="row">
            <Form/>
        </div>
    </div>
    )
}

export default Contact;