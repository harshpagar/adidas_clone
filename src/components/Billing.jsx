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
        <div className="paymentfields">        
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginLeft: "35%"
                }}
                >
                <TextField fullWidth label="Enter Full Name : " id="fullWidth" />
                <br /><br />
                <TextField fullWidth label="Enter Cart Number : " id="fullWidth" /> 
                <br />      
            </Box>
            
                <div>
                <Box>
                    <TextField style={{marginTop:"15px"}}  id="demo-helper-text-misaligned-no-helper" label="Expiry : " />
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