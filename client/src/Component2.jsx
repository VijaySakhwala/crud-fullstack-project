import React, { useRef } from "react"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Component2 = () => {

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const Navigate = useNavigate()

    const demo = (a) => {
        a.preventDefault();
        // const hello = new FormDadata
        // hello.set("name", name.current.value);
        // hello.set("email", email.current.value);
        // hello.set("password", password.current.value);

        const data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        };

        console.log(data);

        axios
            .post("/api/",data)
            .then(function (response) {
                console.log(response.data.status);
                if (response.data.status) {
                    Navigate("/Component1")
                }
                else {
                    alert("somting worng")
                }

            })
            .catch(function (error) {
                console.log(error);
            })



    }

    return (
        <div className="form-container">
            <h2>Register Form</h2>
            <form onSubmit={demo}>
                <input type="text" id="name" name="name" placeholder="enter your name" required ref={name} />
                <input type="email" id="email" name="email" placeholder="enter your email" required ref={email} />
                <input type="password" id="password" name="password" placeholder="enter you password" required ref={password} />

                <button type="submit">sign up</button>
                <Link to={"/Component5"}>login</Link>
            </form >
        </div>
    )
}

export default Component2