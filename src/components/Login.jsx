import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {Navbar } from './Navbar'




export const Login = () => 
{
    const navigate = useNavigate();
  return (
    <>
            <Navbar/> 

    <div>
        <br />
        <h2>Login</h2>
        <strong>Details</strong>
        <br/> <br/>
        <div style={{height:"400px",borderColor:"black",border: "1px solid black",width:"600px",marginTop:"40px",marginLeft:"450px"}}>        
            <Box>
                <TextField style={{width:"500px",marginTop:"50px"}} fullWidth label="Enter Your Email  " id="fullWidth" />
                <br /><br />
                <TextField style={{width:"500px"}} fullWidth label="Password: " id="fullWidth" /> 
                <br />      
            </Box>
            
                  
          
                <Button variant="outlined" style={{marginTop:"40px", color: "white",backgroundColor: "black",width:360,marginBottom:"15px"}}
                onClick={() =>{
                    alert("Login Successful..")
                 navigate("/")}}
                >
                    Login
                </Button>  
        </div>
    </div>
    </>
  );
}