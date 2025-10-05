import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {

    const { createaUser } = use(AuthContext)
    console.log(createaUser);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);


        // create user in the firebase 
        createaUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            });


    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;