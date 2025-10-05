import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
    const { signInUser } = use(AuthContext)


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        // firebase sign in send

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                const signInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }

                // update last signIn in to the database
                fetch('https://caffe-server.vercel.app/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after update patch', data);
                    })

            })
            .catch(error => {
                console.log(error)
            })


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