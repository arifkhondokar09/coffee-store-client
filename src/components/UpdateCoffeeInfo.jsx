import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffeeInfo = () => {
    const coffeeDetails = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffeeInfo = Object.fromEntries(formData.entries());

        // update mongoDB existing data

        fetch(`http://localhost:5000/coffee/${coffeeDetails._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(" data after update", data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your coffee data is successfully Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });


                    navigate("/")
                }

            })








    }

    return (
        <div className='min-h-screen'>
            <div className="card bg-base-100 w-full max-w-3xl mx-auto shadow-2xl mt-10 ">
                <div className="card-body">
                    <h1 className='font-bold text-3xl text-center mb-6'>Update existing Coffee</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Coffee Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='coffeName'
                                    defaultValue={coffeeDetails.coffeName}
                                    className="input input-bordered w-full"
                                    placeholder="Enter coffee name"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price </span>
                                </label>
                                <input
                                    name='price'
                                    defaultValue={coffeeDetails.price}
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="Price"

                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Supplier</span>
                                </label>
                                <input
                                    type="text"
                                    name='supplier'
                                    defaultValue={coffeeDetails.supplier}
                                    className="input input-bordered w-full"
                                    placeholder="Coffee Beans Inc."
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Category</span>
                                </label>
                                <input type="text"
                                    name='category'
                                    defaultValue={coffeeDetails.category}
                                    placeholder='category' className="input input-bordered w-full" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Details</span>
                                </label>
                                <input
                                    type="text"
                                    name='details'
                                    defaultValue={coffeeDetails.details}
                                    className="input input-bordered w-full"

                                    placeholder="Rich flavor with chocolate notes"
                                    required
                                />
                            </div>

                            

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name='photoURL'
                                    defaultValue={coffeeDetails.photoURL}
                                    className="input input-bordered w-full"
                                    placeholder="https://example.com/coffee.jpg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Update Coffee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffeeInfo;