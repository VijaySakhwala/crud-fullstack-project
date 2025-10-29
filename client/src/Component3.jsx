import React, { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';



const Component3 = () => {

    const { id } = useParams()

    useEffect(() => {
        // const data = new FormData()
        // data.set("id", id)
        // console.log(data)

        axios.get(`/api/${id}`)
            .then(function (response) {
                console.log(response.data);
                // name.current.value = response.data.name
                // email.current.value = response.data.email
                // password.current.value = response.data.password

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id])

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const Navigate = useNavigate()

    const demo = (r) => {
        r.preventDefault()
        // const hello = new FormData()

        // hello.set("name", name.current.value)
        // hello.set("email", email.current.value)
        // hello.set("password", password.current.value)
        // hello.set("id", id)

        const hello = {
            name: name.current.value,
            // email: email.current.value,
            password: password.current.value,
        };

        console.log(hello)
        axios.patch(`/api/${id}`, hello)
            .then(function (response) {
                console.log(response.data);
                if (response.data.status) {
                    Navigate("/Component1")
                } else {
                    alert("somthing worng")
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <>
            <div className="form-container">
                <h2>Upadate Form</h2>
                <form onSubmit={demo}>
                    <input type="text" id="name" name="name" placeholder="enter your name" required ref={name} />
                    {/* <input type="text" id="email" name="email" placeholder="enter your email" required ref={email} /> */}
                    <input type="password" id="password" name="password" placeholder="enter you password" required ref={password} />

                    <button type="submit">login</button>
                </form >
            </div>

        </>
    )
}

export default Component3