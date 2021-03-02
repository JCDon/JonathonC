import React from "react";

function Form () {
    return (
        <form className="contact">
            <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                    placeholder="Name Here"/>
            </div>
            <div className="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="Email Here"/>
            </div>
            <div className="form-group">
                        <label for="exampleFormControlTextarea1">Send Me A Message!</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
        </form>
)}

export default Form;