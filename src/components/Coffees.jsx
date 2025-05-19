import React, { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Coffees = ({ coffee, coffees, setCoffees }) => {

    console.log(coffee);
    const { supplier, details, coffeName, category, email, photoURL, price, _id } = coffee;


    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("data after get",data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(leftCoffees => leftCoffees._id !== id)
                            setCoffees(remainingCoffees)
                        }
                    })
            }
        });

    }


    return (

        <div className="hero bg-base-200 min-h-screen  flex">
            <div className="hero-content flex-col lg:flex-row ">
                <img
                    src={photoURL}
                    className="w-[250px]  h-[300px] rounded-lg  shadow-2xl "
                />
                <div>
                    <h1 className="text-5xl font-bold">{coffeName}</h1>
                    <p className="py-2">
                        Price : ${price}
                    </p>
                    <p className="py-2">
                        Details :  {details}
                    </p>
                    <p className="py-2">
                        category : {category}
                    </p>


                </div>

            </div>
            <div>
                <div className="join join-vertical space-y-3">

                   <Link to={`update/${_id}`}> <button className="btn join-item">Edit</button></Link>

                    <Link to={`coffee/${_id}`}> <button className="btn join-item"  >Details</button></Link>

                    <button className="btn join-item" onClick={() => handleDelete(_id)}>Delete</button>

                </div>
            </div>
        </div>

    );
};

export default Coffees;