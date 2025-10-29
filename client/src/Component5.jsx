import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Component5 = () => {


    // const name = useRef()
    const email = useRef()
    const password = useRef()
    const Navigate = useNavigate()

    const hi = (r) => {
        r.preventDefault()
        // const practice = new FormData()

        // practice.set("name", name.current.value)
        // practice.set("email", email.current.value)
        // practice.set("password", password.current.value)
        // console.log(practice)
        const practice = {
            email: email.current.value,
            password: password.current.value
        };

        axios
            .post("/api/login", practice)
            .then(function (response) {
                // console.log(response.data);
                if (response.data.status) {
                    Navigate("/Component1")
                    // localStorage.setItem("name",response.data.userdata.name);
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
        <>
            <div className="form-container">
                <h2>log in </h2>
                <form onSubmit={hi}>
                    <input type="text" id="email" name="email" placeholder="enter your email" required ref={email} />
                    <input type="password" id="password" name="password" placeholder="enter you password" required ref={password} />
                    <button type="submit">login in </button>
                </form >
            </div>
        </>
    )
}

export default Component5