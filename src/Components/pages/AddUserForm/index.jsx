import React, { useState, useRef } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const AddUserForm = (e) => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      address: address,
      contact: contact,
      email: email,
      password: password,
    };
    console.log(data);
    validationForm(data);
    axios
      .post("http://localhost:5000/users", data)
      .then((res) => {
        alert("User Add Data Successfully...!");

        navigate("/");
      })
      .catch((err) => alert(err.response.data));
  };

  const validationForm = (data) => {
    if (validator.isEmail(data.email)) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h2 className="text-center m-2">ADD NEW USER</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label> Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Mobile Number"
            required
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add New User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
