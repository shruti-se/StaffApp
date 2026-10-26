
import { Outlet,Link } from "react-router-dom";
function NavBar(){
    
return(
<div className="Nav">
 <Link to= '/'>
 Home
 </Link>
 <Link to= '/about'>
 About
 </Link>
 <Link to= '/contact'>
 Contact
 </Link>
  <Link to= '/login'>
 Login
 </Link>

 </div>
)


}
export default NavBar;