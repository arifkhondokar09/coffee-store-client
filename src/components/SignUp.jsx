import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { signUpUser } = use(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());
        // console.log(email,password,userProfile)

        //  signup user on firebase
        signUpUser(email, password)
            .then(result => {

                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your account is successfully created",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                }

                const creationTime = result.user?.metadata?.creationTime;
                const lastSignInTime = result.user?.metadata?.lastSignInTime;


                const usersInfo = { email, creationTime, lastSignInTime, ...userProfile };

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(" data after post", data))
            })

            .catch(error => {
                console.log(error.message)
            }

            )
    }
    return (

        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='text-4xl font-bold'>please sign Up </h2>
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="PhotoURL" />
                    <label className="label">Favurite food</label>
                    <input type="text" name='food' className="input" placeholder="Favourite food" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>

    );
};

export default SignUp;