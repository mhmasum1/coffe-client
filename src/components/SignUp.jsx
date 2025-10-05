import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createaUser } = use(AuthContext)
    console.log(createaUser);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        // create user in the firebase 
        createaUser(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = {
                    email, ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }




                // save profile info in the database

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your acount has been created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })
            .catch(error => {
                console.log(error)
            });


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">

                            <label className="label">Name</label>
                            <input type="text" className="input" name="name" placeholder="Name" />

                            <label className="label">Address</label>
                            <input type="text" className="input" name="address" placeholder="Address" />

                            <label className="label">Phone</label>
                            <input type="text" className="input" name="phone" placeholder="Phone Number" />

                            <label className="label">Photo</label>
                            <input type="text" className="input" name="photo" placeholder="Photo Url" />

                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;