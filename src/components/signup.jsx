import * as React from "react";
import { useState } from "react";
import { Footer } from "./Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setMobileno] = useState("");
  const navigate = useNavigate();

  const Signup = () => {
    var user = {
      name: name,
      email: email,
      password: password,
      mobileno: mobileno,
    };

    var userdata = JSON.parse(localStorage.getItem("adidas") || "[]");
    var c = 0;
    for (var i = 0; i < userdata.length; i++) {
      if (user.email === userdata[i].email) {
        alert("Email is already Registered");
        c++;
      }
    }
    if (c === 0) {
      userdata.push(user);
      localStorage.setItem("adidas", JSON.stringify(userdata));
      alert("Signup Successfull..");
      navigate("/login");
    }
    console.log(email, password);
  };

  return (
    <>
      <Navbar />

      <div>
        <br />
        <h1>SignUp</h1>
        <strong>Details</strong>
        <br /> <br />
        <div
          style={{
            height: "480px",
            borderColor: "black",
            border: "1px solid black",
            width: "600px",
            marginTop: "20px",
            marginLeft: "450px",
            marginBottom: "70px",
          }}
        >
          <form onSubmit={Signup}>
            <Box>
              <TextField
                type={"text"}
                style={{ width: "500px", marginTop: "50px" }}
                fullWidth
                label="Enter Your Name  "
                id="fullWidth"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                type={"email"}
                style={{ width: "500px" }}
                fullWidth
                label="Enter Your Email  "
                id="fullWidth"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <TextField
                type={"password"}
                style={{ width: "500px", marginTop: "10px" }}
                fullWidth
                label="Password  "
                id="fullWidth"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <TextField
                type={"tel"}
                style={{ width: "500px", marginTop: "10px" }}
                fullWidth
                label="Mobile No  "
                id="fullWidth"
                onChange={(e) => {
                  setMobileno(e.target.value);
                }}
              />
            </Box>

            <Button
              type="submit"
              variant="outlined"
              style={{
                marginTop: "40px",
                color: "white",
                backgroundColor: "black",
                width: 360,
                marginBottom: "5px",
              }}
            >
              SignUp
            </Button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
