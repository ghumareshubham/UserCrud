import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserRegistration = () => {
    let [msg, setMsg] = useState();
    let [confirm, setConfirm] = useState('');
   
    let email1;
    let password1;
    let firstName1;
    let lastName1;
    let city1;
    let state1;
    let country1;
    let postalCode1;
    let mobileNumber1;
    let gender1;
    

    // function create() {
    //     let data = {
    //         email: email1,
    //         password: password1,
    //         firstName: firstName1,
    //         lastName: lastName1,
    //         city: city1,
    //         state: state1,
    //         country: country1,
    //         postalCode: postalCode1,
    //         mobileNumber: mobileNumber1,
    //         gender: gender1
    //     }
    //     axios.post("http://localhost:8080/user/createUser", data).then((response) => {
    //         setConfirm(response.data)
    //         alert(response.data)
    //     })
    // }



    function create() {
        let data = {
            email: email1,
            password: password1,
            firstName: firstName1,
            lastName: lastName1,
            city: city1,
            state: state1,
            country: country1,
            postalCode: postalCode1,
            mobileNumber: mobileNumber1,
            gender: gender1
        };
    
        axios({
            method: 'post',  
            url: 'http://localhost:8080/user/createUser',
            data: data,  // Pass the data object here
            headers: {
                'Content-Type': 'application/json'  
            }
        })
        .then(response => {
            console.log(response.data);
            setConfirm(response.data);
            alert("User Saved Successfully....");
            // navigate('/users'); 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while creating the user.');
        });
    }
    
    
    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-10">
                        <div className="col-lg-8 col-xl-20">
                            <div className="card rounded-3">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                                    <form className="px-md-2">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline datepicker">
                                                <label htmlFor="exampleDatepicker1" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => email1 = e.target.value} />
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-16 mb-4">
                                                <label className="form-label" htmlFor="form3Example1q">Password</label>
                                                <input type="password" id="form3Example1q" className="form-control" onBlur={(e) => password1 = e.target.value} />
                                            </div>
                                        </div> 
                                        <div className="row ">
                                            <div className="col-md-16 mb-4">
                                                <label className="form-label" htmlFor="form3Example1q">First Name</label>
                                                <input type="text" id="form3Example1q" className="form-control" onBlur={(e) => firstName1 = e.target.value} />
                                            </div>
                                        </div>             
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => lastName1 = e.target.value} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => city1 = e.target.value} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">State</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => state1 = e.target.value} />
                                                </div>
                                            </div>           
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">Country</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => country1 = e.target.value} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">Postal Code</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => postalCode1 = e.target.value} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">Mobile Number</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => mobileNumber1 = e.target.value} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker">
                                                    <label htmlFor="exampleDatepicker1" className="form-label">Gender</label>
                                                    <input type="text" className="form-control" id="exampleDatepicker1" onBlur={(e) => gender1 = e.target.value} />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg mb-1" onClick={create}>Submit</button>
                                        <Link to="/users" className="btn btn-primary m-3">Go to User List</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserRegistration;
