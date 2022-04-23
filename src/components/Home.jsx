import React from "react"
// import '../styles/Home.css';
import Button from '@mui/material/Button';
import {Navbar } from './Navbar'
import { Box } from '@mui/system'

const Home = () => {
    return (
        <>
        <Navbar/> 
        <div className="container">
            <div className="main">
                <h1 className="but">YZY 700 MNVN GEODE</h1>
                <h4 className="but">AVAILABLE NOW</h4>
                <Button className="but">Shop Now -</Button>           
                 <img className='img1' src="https://www.masamovement.com/wp-content/uploads/2020/04/bone-700-thegem-blog-default.jpg" alt="imgtasg"></img>
            </div>  
            <div className="mid">
                <h1>Popular Right Now</h1>
                <h1>WHO ARE YOU SHOPPING FOR?</h1>
               

            </div>
            <div>
                <img className='img4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Adidas_Superstar_shoes_pair.jpg/1200px-Adidas_Superstar_shoes_pair.jpg" alt="imgtasg"></img>
                <img className="img3" src="https://images.unsplash.com/photo-1565070969584-2b5c7dd583e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80" alt ="img"></img>
            </div>
           
            <div className="best">
                <h1>BEST OF ADIDAS</h1>
                <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    <img className="b1" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/FY7756_01_standard.jpg" alt="imgb"></img>
                    <img className="b1" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e4850c6019841138e38a7fa00de8937_9366/280647_01_standard.jpg" alt="imgb"></img>
                    <img className="b1" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/584670fb39cd4f1aa70fac5500914ec4_9366/FY9121_01_standard.jpg" alt="imgb"></img>
                    <img className="b1" src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62d96641e799450fbbdfad0800cb06ed_9366/GZ9256_01_standard.jpg" alt="imgb"></img>
                </Box>
            </div>
            <div className="join">
                <h1 className="t1">JOIN ADIDAS AND GET 15% OFF</h1>
                <span ><Button style={{backgroundColor:"rgb(62, 55, 57)" , width:"140px"}} variant="contained">Sign UP</Button></span>

            </div>

            <div id="fmenu">
            <div class="fcontainer">
                <ul>
                    <h2>PRODUCTS</h2>
                    <li>Footwear</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Outlet – Sale</li>
                    <li>New Arrivals</li>
                </ul>
            </div>
            <div class="fcontainer">
                <ul>
                    <h2>SPORTS</h2>
                    <li>Running</li>
                    <li>Football</li>
                    <li>Gym/Training</li>
                    <li>Tennis</li>
                    <li>Outdoor</li>
                    <li>Basketball</li>
                    <li>Swimming</li>
                </ul>
            </div>
            <div class="fcontainer">
                <ul>
                    <h2>COLLECTIONS</h2>
                    <li>Ultraboost</li>
                    <li>Superstar</li>
                    <li>Predator</li>
                    <li>Parley</li>
                    <li>adicolor</li>
                </ul>
            </div>
            <div class="fcontainer">
                <ul>
                    <h2>SUPPORT</h2>
                    <li>Help</li>
                    <li>Customer Services</li>
                    <li>Returns & Exchanges</li>
                    <li>Store Locator</li>
                    <li>Bra Fit Guide</li>
                    <li>Shipping</li>
                    <li>adiclub</li>
                    <li>Order Tracker</li>
                </ul>
                
            </div>

            <div class="fcontainer">
                <ul>
                    <h2>COMPANY INFO</h2>
                    <li>About Us</li>
                    <li>adidas stories</li>
                    <li>adidas Apps</li>
                    <li>Entity Details</li>
                    <li>Press</li>
                    <li>Careers</li>
                 </ul>
                
            </div>
        </div>
        <div className="last">
               
                <h3 className="p">Privacy Policy |  Terms and Conditions |  Cookies</h3>
                <h3 className="i">India</h3>
        </div>

  
        </div>
        </>
    )
}

export {Home}
