import React from 'react'
import {Link} from 'react-router-dom'
const FooterSection = () => {
  return (
    
	<section className="contact" id="contact">
    <div className="main-contact">
        <div className="contact-content">
            <li><Link to="#shop">Shop</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </div>

        <div className="contact-content">
            <li><Link to="#">Shipping & Returns</Link></li>
            <li><Link to="#">Store Policy</Link></li>
            <li><Link to="#">Payment Methods</Link></li>
        </div>

        <div className="contact-content">
            <li><Link to="#">Contact</Link></li>
            
        </div>

        <div className="contact-content">
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Instagram</Link></li>
            <li><Link to="#">Pinterest</Link></li>
        </div>

    </div>

    <div className="action">
        <form>
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="submit" name="submit" value="Submit" required />
        </form>
    </div>
</section>
  )
}

export default FooterSection