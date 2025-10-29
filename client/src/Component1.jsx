import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Component1 = () => {

    const [data, setdata] = useState([])


    const Navigate = useNavigate()

    const fetch = () => {
        axios.get
            ("/api/")
            .then(function (response) {
                console.log(response.data.data);
                setdata(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const hello = (e) => {
        var id = e.target.getAttribute("data-id");
        // const cricket = new FormData()
        // cricket.set("id", id)
        // console.log(cricket)


        axios.delete(`/api/${id}`)
            .then(function (response) {
                console.log(response.data);
                if (response.data) {
                    fetch()
                } else {
                    alert("somthing worng")
                }
            })
            .catch(function (error) {
                console.log(error);
            });



    }
    const change = (s) => {
        var id = s.target.getAttribute("data-id");
        Navigate("/Component3/" + id)
    }

    // const logout = () => {
    //     Navigate("/Component5")
    // }
    useEffect(() => {

        fetch()
    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>delete data</th>
                    <th>change data</th>
                </tr>
                {
                    data.map((a) => {
                        return (
                            <>
                                <tr>
                                    <td >{a._id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.email}</td>
                                    <td>{a.password}</td>
                                    <td><button type="button" data-id={a._id} onClick={hello}>delete</button>
                                    </td>
                                    <td><button type="button" data-id={a._id} onClick={change}>upadate</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Component1;