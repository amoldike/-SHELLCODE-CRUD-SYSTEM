import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  //   --------------------TO STORE THE DATA FROM API--------
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  // ------------------------DELETE THE USER---------------------

  const deleteUserHandler = (userId) => {
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then((res) => window.location.reload())
      .catch((err) => alert(err));
  };
  return (
    <div>
      <h1 className="text-center text-white">SHELLCODE CRUD SYSTEM</h1>
      <Link
        to="/add-user"
        className="btn btn-success float-right mb-3 text-white border"
      >
        Add User
      </Link>
      <table
        className="table"
        style={{ boxShadow: "0px 1px 8px 7px rgba(0, 0, 0, 0.426)" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.password}</td>
                <td>
                  <Link
                    to={`/edit-user/${user._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUserHandler(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
