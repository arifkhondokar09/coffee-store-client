import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetails = () => {
    const UserDetails= useLoaderData();
    console.log(UserDetails)
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={UserDetails.photo}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{UserDetails.name}</h1>
      <p className="py-6">
       {UserDetails.email } : {UserDetails.food }   
      </p>
     <Link to='/'>  <button className="btn btn-primary">Back to Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default UserDetails;