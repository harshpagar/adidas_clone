import { useNavigate } from 'react-router-dom';
import {Navbar } from './Navbar'
import '../styles/UserDetails.css';
import Button from '@mui/material/Button';
import { Footer } from "./Footer";


export const UserDetails = () =>
{
    const userlogin =  JSON.parse(localStorage.getItem("adidaslogin"))
    const navigate = useNavigate()

    const logout = () =>
    {
        localStorage.removeItem("adidaslogin");
        alert("Logout Successfull")
        navigate("/")        
    }

    return(
        <>
          < Navbar />
            <h3 className='ud'>User Details</h3>
            <div className='mainu'>
                <h4>Name : {userlogin[0].name}</h4>
                <h4>Email : {userlogin[0].email}</h4>
                <h4>Mobile : {userlogin[0].mobileno}</h4>
           
            {/* <button type="submit" onClick={logout} >logout</button> */}
            <Button variant="outlined" style={{color: "white",backgroundColor: "rgb(52, 98, 82)",width:200,marginBottom:"15px"}} onClick={logout}  >
                    LogOut
            </Button> 
            </div><br />
            <Footer/> 
        </>
    )
}