import React from 'react';
// import '../styles/Cart.css'
import {Navbar } from'./Navbar'
import "@mui/icons-material"
import { IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () =>
{

    let cartData =JSON.parse(localStorage.getItem("cart"))
    const [value,setValue] = useState({});
    var c =0;
    for(var i=0; i<cartData.length;i++){
        c += cartData[i].Price
    }
    console.log(c)
    console.log(value)

   



    const deletecart = (product) =>
    {
        
        cartData.splice(cartData.findIndex(pi => pi.id === product.id) , 1)        
        localStorage.setItem("cart",JSON.stringify(cartData));     

        setValue({"msg":"refresh"});
    }   

    console.log(cartData);


    return(<div>
{ <Navbar /> }
        <div className='add'>
                    

            <div id="container">
                {/* <h1 className="bold-font">Your  Bag</h1> */}
                <p className="bold-font"> Item Details </p>
                <p></p>
                
                <div id="products">

                    {cartData ? cartData.map((prod)=>{
                        return(

                        
                        <div className='prod'>
                            <div className='image'>
                                <img src={prod.img1} alt="Product" />
                            </div>
                            <div className='data'>
                                <h2 className='ti'>{prod.Title}</h2>
                                <h4 className='cate'> {prod.category} </h4>
                                <h4 className='type'> {prod.type} </h4>
                                <p className='pri'> ₹  {prod.Price} </p>
                                
                                <IconButton onClick={() => deletecart(prod)}  style={{marginLeft:"450px",marginTop:"-250px"}}  aria-label="delete">
                                            <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>)
                    }) : <h1> No Product Addede Yet! </h1>}
                </div>

                <div id="order_summary">
                        <a href="billing_page.html">
                            <div className="checkout_btn" >
                                <p> checkout </p>
                            </div>
                        </a>
                    
                    <div className="summary">
                    <p className="bold-font "> Order Summary </p>
                        <hr id="summary-line" />
                        <div className="rows">
                            <p className="col1">Price (Incl Item Discounts)</p>
                            <p  className="col2" id="total"> ₹ 0.00 </p>
                        </div>

                        <div className="rows">
                            <p>Order Discounts</p>
                            <p id="discount">-₹ 0.00 </p>
                        </div>

                        <div className="rows">
                            <p> Total  </p>
                            <p id="sum">  {c}   <small className="sm-text">(Inclusive of all taxes)</small></p> 
                        </div>

                        

                        <div id="promocode-section">
                            <input type="text" id="promocode" placeholder="Enter promocode here" />
                            <button className="apply-btn"> Apply </button>
                        </div>

                    </div>
                </div>
                <hr/>
             </div>
        </div>
        </div>
    )
}