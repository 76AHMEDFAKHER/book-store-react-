import React , {useEffect} from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from 'react-router-dom';

// import {Link,Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fasom from '@fortawesome/free-solid-svg-icons'
const Header = ({activeUsrIn}) => {
  

  let AutoNavigator = () =>{
   if (activeUsrIn){
    
    return <li><Link to="/logout"> logout </Link></li> 
   }else {
    return <li><Link to="/login"> login </Link></li>
   }
  }

 
  return (
    <header>
    <Link to="/" className="logo"><h1>books</h1></Link>
    <div className="bx bx-menu" id="menu-icon"></div>
    <button className="button" /*onClick="myFunction()"*/><h2> DARK MODE</h2></button>
    <ul className="navbar">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        { AutoNavigator()} 
      {activeUsrIn ? <Navigate to="/shop" /> : null}  

    </ul>

    <div className="icons">
    <FontAwesomeIcon icon={fasom.faBasketShopping} stytyle={{margin: 100}}/>
    <FontAwesomeIcon icon={fasom.faHeartCircleCheck} />
     
    </div>
</header>
  )
}

export default Header