import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const Users = () => {
  const initialUsers = useLoaderData();
  const { deleteUser } = use(AuthContext);
  const [users, setUsers] = useState(initialUsers)
  // console.log(users)



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
        // firebase account delete method
        deleteUser()
          .then(() => {
            console.log("User deleted successfully from Firebase Auth");
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });

        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE"
        }).then(res => res.json())
          .then(data => {
            console.log("data after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted",
                icon: "success"
              });
              const remainingUsers = users.filter(us => us._id !== id);
              setUsers(remainingUsers);
            }

          })
      }
    });



  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                No
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Favorite Food</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            users.map((user, index) => <tr key={user._id}>
              <th>
                <label>
                  {index + 1}
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>

                  </div>
                </div>
              </td>
              <td>  {user.email}  </td>
              <td>{user.food}</td>
              <td><button className='btn' onClick={() => handleDelete(user._id)}>Delete </button></td>

            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Users;