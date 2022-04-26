import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


const Navbar = (props) => {
  const Nav = useNavigate();

  const Navigate = () =>{
     Nav("/Products")
  }
   
  const Home = () =>
  {        
    Nav("/");
  } 
  
   const userlogin =  JSON.parse(localStorage.getItem("adidaslogin"))

    const user = () =>
    {
        if(userlogin == null)
        {
          Nav("/login");
        }
        else
        {     
            console.log(userlogin[0].name)       
            Nav("/user");
        }
    }




  return (

    <div className='nav'>
          <div className='nav-title' onClick={Home}>
            <img src="data:image/png;base64,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" alt="imgtasg"></img>
          </div>

          <div className='nav-links'> 
              <span className='nam' onClick={Navigate} > Shop</span>
              <span className='nam'  onClick={Navigate} >Men</span>
              <span className='nam' onClick={Navigate} >Women</span>
              <span className='nam' onClick={Navigate}>Explore</span>
              <span className='nam' onClick={Navigate}>Shop near you</span>       
          </div>

          <div>
              <input className="search" type="search" placeholder=" Search" onChange={(e)=> props.searchd(e.target.value)} />
          </div>

          <div >
         
            <div className='admin'>         
                <span >
                    <br /><strong  onClick={user}><svg   xmlns="http://www.w3.org/2000/svg" className="admin" width="24" height="24" marginRight="50px" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg></strong>
                </span>
            </div>  


          <Link to={`/cart`} className="carticon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z"/></svg>
          </Link>
       
          </div>
       
       
    </div>
  
    
    
  )
} 
export {Navbar} ;



