import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Navbar } from './Navbar'
import { Footer } from "./Footer";




export const Login = () => 
{
   
    const [username,setUserame]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();    

    const data = JSON.parse(localStorage.getItem("adidas"))
    var ulogin = JSON.parse(localStorage.getItem("adidaslogin") || "[]");


    console.log(data)

    console.log(ulogin)

    const login= () =>
    {
        var c = 0;
        for(var i=0;i<data.length;i++)
        {
            if(data[i].username === username && data[i].password === password)
            {
                alert("login Successfully");
                c++;   

                ulogin.push(data[i]);
                localStorage.setItem("adidaslogin",JSON.stringify(ulogin));
                
                navigate("/");
            }
        }  
        
        if(c === 0)
        {
            alert("Invalid Credential")
        }
    }    

  return (
    <>
            <Navbar/> 

    <div>
        <br />
        <h2>Login</h2>
        <strong>Details</strong>
        <br/> <br/>
        <div style={{height:"400px",borderColor:"black",border: "1px solid black",width:"600px",marginTop:"40px",marginLeft:"450px",marginBottom:"70px"}}>        
        <form onSubmit={login}>
            <Box>
                <TextField type={"email"}   onChange={(e) => {setUserame(e.target.value)}}style={{width:"500px",marginTop:"50px"}} fullWidth label="Enter Your Email  " id="fullWidth" />
                <br /><br />
                <TextField type={"password"}  onChange={(e) =>{setPassword(e.target.value)}} style={{width:"500px"}} fullWidth label="Password: " id="fullWidth" /> 
                <br />      
            </Box>
            
                  
          
                <Button  type="submit"  variant="outlined" style={{marginTop:"40px", color: "white",backgroundColor: "black",width:360,marginBottom:"15px"}}
               
                >
                    Login
                </Button>  
                </form>
                <Button variant="outlined" style={{marginTop:"40px", color: "white",backgroundColor: "black",width:360,marginBottom:"15px"}} onClick={() => navigate("/signUp")  } >
                    SignUp
                </Button>  

                


        </div>
        <Footer/> 
    </div>
    </>
  );
}