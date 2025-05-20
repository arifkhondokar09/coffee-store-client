import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { signInUser } = use(AuthContext);


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //  sign in with firebase
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user?.metadata?.lastSignInTime
        const userUpdate = { email, lastSignInTime }
        if (result.user) {
          fetch('http://localhost:5000/users', {
            method: "PATCH",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(userUpdate)
          })
            .then(res => res.json())
            .then(data => {
              console.log("data after patch", data)
            })
          
        }
      })
      .catch((error) => {
        console.log(error.message)
      })





  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;