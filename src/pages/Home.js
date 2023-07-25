import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('username')));
  let navigate=useNavigate();
  
  const handleLogout=()=>{
    localStorage.clear();
    navigate("/login");
  }
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/Recipies`}>Recipies</Link>
            </li>
            <li>
              <Link to={`/products`}>Products</Link>
            </li>
            <li>
              <Link to={`/users/${user.id}/MyCart`}>My Cart</Link>
            </li>
            <li>
              <Link to={`/About`}>About</Link>
            </li>
            
            
            <button className="logout" onClick={handleLogout}>Logout</button>

          </ul>
        </nav>

        <h1>Welcome, {user.username}!</h1>
        
      </div>
    );
  }

  export default Home;