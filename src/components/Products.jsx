import {  useEffect, useState } from "react";
import '../styles/Products.css';
import { Box } from '@mui/system'
import {ListItem ,Button} from "@mui/material"
import {Navbar } from'./Navbar'


export const Products = (props) =>
{
    let cart = []
    const [data,setData] = useState([])
    const [filterData, setfilterData] =useState([])

    const [searchdata,setSearchdata ] = useState("")

    const searchd = (ele) => 
    {
        setSearchdata(ele);
        console.log(searchdata)
    }


    const catfilter = (cat) => {
        console.log(cat)
        const updatedList = data.filter((curElem) => {
  
          return curElem.category === cat
        })
        setfilterData(updatedList);
        console.log(updatedList);
    }
 
    const typefilter = (fil) => {
        console.log(fil)
        const updatedList = data.filter((curElem) => {
  
          return curElem.type === fil
        })
        setfilterData(updatedList);
        console.log(updatedList);

    }

    const htolItem = () => {
        const HtoL = data.sort((a,b)=>{
        return b.Price - a.Price;
      });
      setfilterData(HtoL)
      console.log(HtoL)
    }

    const ltohItem = () => {
        const LtoH = data.sort((a,b)=>{
          return  a.Price - b.Price;
        });
        setfilterData(LtoH)
        console.log(LtoH)
    }

    const fetchData = () =>
    {
        fetch('https://adidas11.herokuapp.com/products')
        .then( (res) => res.json())
        .then( (res) => {
            setData(res)
            setfilterData(res)
        })
            
        .catch( (err) => console.log(err))
    }
    useEffect(
        ()=>
        {
            fetchData()
        },[]
    );

    if(localStorage.getItem("cart") === null){
        localStorage.setItem("cart",JSON.stringify([]));
    }

    console.log(localStorage.getItem("cart") === null)

    // localStorage.setItem("cart",cart)
    const updateCart = (prod) =>{
        let cartData =JSON.parse(localStorage.getItem("cart"))
        cart = [...cartData, prod]
        console.log(cart)
        
        localStorage.setItem("cart",JSON.stringify(cart))
        alert("Product added into the cart!");
    }

    return(<div>
        <Navbar searchd={searchd} />
        <h1>SHOES </h1>
        
        <div className='flex'>
        <div className='sortingdiv'>
            <span id='spanbutton2'><Button onClick={() => catfilter("Mens")} style={{backgroundColor:"rgb(11, 97, 93)",marginTop:"15px",width:"140px"}} variant="contained">Mens</Button></span>
            <span id='spanbutton2'><Button onClick={() => catfilter("Womens")} style={{backgroundColor:"rgb(11, 97, 93)",marginTop:"15px",width:"140px"}} variant="contained">Womens</Button></span>
            <span id='spanbutton2'><Button onClick={() => typefilter("Sportswear")} style={{backgroundColor:"rgb(11, 97, 93)",marginTop:"15px",width:"140px"}} variant="contained">Sportswear</Button></span>
            <span id='spanbutton2'><Button onClick={() => typefilter("Running")} style={{backgroundColor:"rgb(11, 97, 93)",marginTop:"15px",width:"140px"}} variant="contained">Running</Button></span>
            <span id='spanbutton'><Button  onClick={() => htolItem()} style={{backgroundColor:"rgb(11, 97, 93)",marginTop:"15px",width:"140px"}} variant="contained">High To Low</Button></span>
            <span id='spanbutton1'><Button onClick={() => ltohItem()} style={{backgroundColor:"rgb(11, 97, 93)",marginTop:"15px",width:"140px"}} variant="contained">Low To High</Button></span>
          

        </div>
        <div className='productdiv'>
        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            { 
                filterData.filter((ele) => {
                        if(searchdata === "" || searchdata=== undefined)
                        {
                            return data;
                        }
                        else
                        {
                            return ele.Title.toLowerCase().includes(searchdata.toLowerCase());
                        }
                    }).map(e=>(
                     <ListItem className='listitem' style={{display:"grid"}}>
                    <img className="image" src={e.img1} alt="sofa1" />
                    <h4  className="tit">{e.Title}</h4>
                    <div className="sam">{e.category}</div>
                    <div className="sam">{e.type}</div>
                    <div className='price' >₹ {e.Price} </div>
                        <div className='discount' ><span id='spanbutton'>
                        <Button onClick={()=>{updateCart(e)}} style={{backgroundColor:"rgb(4, 185, 85)",marginTop: "-80px",marginLeft: "45px"}} variant="contained">Add To Cart</Button></span>
                        </div>
                    </ListItem>
                )) 
            }
      
    </Box>
   

                </div>
            </div>
            {/* <Footer/> */}
        </div>);
}