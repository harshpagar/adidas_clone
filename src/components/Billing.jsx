import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {Navbar } from './Navbar'



export const Billing = () => 
{
    const navigate = useNavigate();
  return (
    <>
            <Navbar/> 

    <div>
        <br />
        <h2>Billing</h2>
        <strong>Credit or Debit Card</strong>
        <br/> <br/>
        <div style={{height:"400px",borderColor:"black",border: "1px solid black",width:"600px",marginTop:"40px",marginLeft:"450px"}}>        
            <Box>
                <TextField style={{width:"500px",marginTop:"50px"}} fullWidth label="Enter Full Name : " id="fullWidth" />
                <br /><br />
                <TextField style={{width:"500px"}} fullWidth label="Enter Cart Number : " id="fullWidth" /> 
                <br />      
            </Box>
            
                <div>
                <Box >
                    <TextField style={{marginTop:"15px",marginRight:"50px"}}  id="demo-helper-text-misaligned-no-helper" label="Expiry : " />
                    <TextField style={{marginTop:"15px"}} id="demo-helper-text-misaligned-no-helper" label="CVV : " />
                    </Box>
                </div>  
            <br /> <br/>
                <Button variant="outlined" style={{color: "white",backgroundColor: "black",width:360,marginBottom:"15px"}}
                onClick={() =>{
                    alert("Payment Successful..")
                 navigate("/")}}
                >
                    Checkout
                </Button>  
        </div>
    </div>
    </>
  );
}