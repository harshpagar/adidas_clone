import {  useEffect, useState } from "react";
import '../styles/Products.css';
import { Box } from '@mui/system'
import {ListItem ,Button} from "@mui/material"
import {Navbar } from'./Navbar'
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./Footer";
import { getDataError, getDataLoading, getDataSuccess} from "../Redux/action";


export const Products = (props) =>
{
    let cart = []
    const [data,setData] = useState([])
    const [searchdata,setSearchdata ] = useState("")
    const [sort1 , setSort] = useState("")
    const [typefilter1 , setTypefilter1] = useState("all")
    const [catfilter1 , setCatfilter1] =useState("all")

    const searchd = (ele) => 
    {
        setSearchdata(ele);
        console.log(searchdata)
    }


    const sorting =(p) => {
        setSort(p)
    }

    const typefilter =(p) => {
        setTypefilter1(p)
    }

    const catfilter =(p) => {
        setCatfilter1(p)
    }


    const dispatch = useDispatch();
    
    const { todos } = useSelector((state) => ({
      todos: state.todos,
    }));
    console.log(todos)    

    useEffect(()=>{
            fetchData()
        },[]);

    const fetchData = async() =>{
    try {
        dispatch(getDataLoading());
        const fetchdata = await fetch('https://adidas11.herokuapp.com/products')
        .then( (res) => res.json());
        dispatch(getDataSuccess(fetchdata));
            
     } catch (err) {
            dispatch(getDataError(err));
      }
    }

    if(localStorage.getItem("cart") === null){
        localStorage.setItem("cart",JSON.stringify([]));
    }

    console.log(localStorage.getItem("cart") === null)

    const updateCart = (prod) =>{
        let cartData =JSON.parse(localStorage.getItem("cart"))
        cart = [...cartData, prod]
        console.log(cart)
        
        localStorage.setItem("cart",JSON.stringify(cart))
        alert("Product added into the cart!");
    }

    return(
    <div>
        <Navbar searchd={searchd} />
        <div>
          <h1>SHOES </h1>
        <div className='flex'>
        
        <div className='sortingdiv'>
            <span id='spanbutton2'><Button onClick={() => catfilter("Mens")} style={{backgroundColor:"rgb(59, 198, 198)",borderRadius:"15px",marginTop:"15px",width:"140px"}} variant="contained">Mens</Button></span>
            <span id='spanbutton2'><Button onClick={() => catfilter("Womens")} style={{backgroundColor:"rgb(59, 198, 198)",borderRadius:"15px",marginTop:"15px",width:"140px"}} variant="contained">Womens</Button></span>
            <span id='spanbutton2'><Button onClick={() => typefilter("Sportswear")} style={{backgroundColor:"rgb(59, 198, 198)",borderRadius:"15px",marginTop:"15px",width:"140px"}} variant="contained">Sportswear</Button></span>
            <span id='spanbutton2'><Button onClick={() => typefilter("Running")} style={{backgroundColor:"rgb(59, 198, 198)",borderRadius:"15px",marginTop:"15px",width:"140px"}} variant="contained">Running</Button></span>
            <span id='spanbutton2'><Button  onClick={() => sorting("htol")} style={{backgroundColor:"rgb(59, 198, 198)",borderRadius:"15px",marginTop:"15px",width:"140px"}} variant="contained">High To Low</Button></span>
            <span id='spanbutton2'><Button onClick={() => sorting("ltoh")} style={{backgroundColor:"rgb(59, 198, 198)",borderRadius:"15px",marginTop:"15px",width:"140px"}} variant="contained">Low To High</Button></span>
          

        </div>
        <div className='productdiv'>
        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            { 
                todos.filter((ele) => {
                        if(searchdata === "" || searchdata=== undefined)
                        {
                            return data;
                        }
                        else
                        {
                            return ele.Title.toLowerCase().includes(searchdata.toLowerCase());
                        }
                    })
                    .sort((a,b) => {
                        if(sort1 === "ltoh")
                        {
                             return a.Price - b.Price;   
                        }
                        else if( sort1 === "htol"){
                            return b.Price - a.Price;
                        }
                    })
                    .filter((e) => {
                        if(typefilter1 === "all"){
                            return e;
                        } else {
                            return e.type === typefilter1;
                        }
                        
                    })
                    .filter((e) => {
                        if(catfilter1 === "all"){
                            return e;
                        } else {
                            return e.category === catfilter1;
                        }
                    })
                    .map(e=>(   
                    <ListItem className='listitem' style={{display:"grid"}}>
                    
                    <img className="image" src={e.img1} alt="sofa1" />
                    <h4  className="tit">{e.Title}</h4>
                    <div className="sam">{e.category}</div>
                    <div className="sam">{e.type}</div>
                    <div className='price'>₹ {e.Price} </div>
                    <div className='discount' ><span id='spanbutton'>
                        <Button onClick={()=>{updateCart(e)}} style={{backgroundColor:"rgb(4, 185, 85)",marginTop: "-80px",marginLeft: "45px"}} variant="contained">Add To Cart</Button></span>
                    </div>
                    
                    </ListItem>
                )) 
            }
      
    </Box>
   
                </div>
                </div>
        </div>
        <Footer/>
    </div>);
}