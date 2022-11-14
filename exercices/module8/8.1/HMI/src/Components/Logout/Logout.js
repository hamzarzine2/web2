import navbar from "../Navbar/Navbar";
import navigate from "../Router/Navigate";
import { clearAuthenticatedUser } from "../utils/auths"

const logout=()=>{
    clearAuthenticatedUser();
    navbar();
    navigate('/login')
}

export default logout;