import { Link } from "react-router-dom"
import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


function Footer(){
 
    return(
     <div className="footer">
        <div className="footer-left">
        <Link to='/about'>
        About Us
        </Link>
       </div>
   <div>
     <Link to='/contact'>
      Connect with us
    </Link>
    </div>
    <div className="footer-right">
    
    <a href='https://www.facebook.com/ChitkaraU/'>
    <FaFacebook />
    </a>
<a href='https://www.facebook.com/ChitkaraU/'>
    <FaTwitter />
    </a>

    <a href='https://www.facebook.com/ChitkaraU/'>
    <FaInstagram />
    </a>
    </div>
   </div>


    )



}

export default Footer