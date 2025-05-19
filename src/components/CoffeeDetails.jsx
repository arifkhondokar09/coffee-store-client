import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeDetails= useLoaderData();
    console.log(coffeDetails);
    const {photoURL, coffeName,details,price, category}=coffeDetails;
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={photoURL}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='pl-5 '>
      <h1 className="text-5xl font-bold">{coffeName}</h1>
      <p className='pt-3'>Price : ${price}</p>
      <p className="pt-2">
       Description : { details}
      </p>
      <p className="pt-2 pb-6">
       Description : { category}
      </p>
   <Link to='/'> <button  className='btn btn-primary'>Back to Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default CoffeeDetails;