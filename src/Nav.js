import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <nav className ="navbar">
            <h1>Books</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link style={{color: "white", backgroundColor: "#f1356d", borderRadius:"8px" }} to="/add">Add book</Link>
            </div>
            
        </nav>
     );
}
 
export default Nav;