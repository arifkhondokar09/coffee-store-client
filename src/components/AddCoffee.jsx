import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(coffeeData)
    })
      .then(res => res.json())
      .then(data => {
        console.log("data after post", data)
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your coffee is successfully added ",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })


  };

  return (
    <div className="card bg-base-100 w-full max-w-3xl mx-auto shadow-2xl mt-10">
      <div className="card-body">
        <h1 className='font-bold text-3xl text-center mb-6'>Add New Coffee</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Coffee Name</span>
              </label>
              <input
                type="text"
                name='coffeName'
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
                className="input input-bordered w-full"
                placeholder="Coffee Beans Inc."
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input type="text" name='category' placeholder='category' className="input input-bordered w-full" />

            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Details</span>
              </label>
              <input
                type="text"
                name='details'
                className="input input-bordered w-full"

                placeholder="Rich flavor with chocolate notes"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name='email'
                className="input input-bordered w-full"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name='photoURL'
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
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;