import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUserForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        setFullName(res.data[0].fullName);
        setAddress(res.data[0].address);
        setContact(res.data[0].contact);
        setEmail(res.data[0].email);
        setPassword(res.data[0].password);
      })
      .catch((err) => alert(err));
  }, []);

  const updateUserHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      address: address,
      contact: contact,
      email: email,
      password: password,
    };
    console.log(data);
    axios
      .put(`http://localhost:5000/users/${userId}`, data)
      .then((res) => {
        alert("User Details Updatad Successfully...!");
        navigate("/");
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <div>
      <h2 className="text-center m-2">EDIT USER INFO</h2>
      <form onSubmit={updateUserHandler}>
        <div className="form-group">
          <label> Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            required
            value={fullName}
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
            value={address}
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
            value={contact}
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
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Save Changes!
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
