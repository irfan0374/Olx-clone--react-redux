import React, { useContext} from 'react';
import { useNavigate,NavLink } from 'react-router-dom'; // Import useNavigate
import { getAuth, signOut } from 'firebase/auth';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/firebaseContext';

function Header() {
  const navigate = useNavigate(); // Use useNavigate to get the navigate function
  const { user, setUser } = useContext(AuthContext);
  const { app } = useContext(FirebaseContext);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null);
      navigate('/login'); // Use navigate to navigate to the '/login' page
    });
  };
  const handleLogin=()=>{
    {!user && navigate('/login')}
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={handleLogin}>{user ? user.displayName:"Login"}</span>
          <hr />
        </div>
       { user && <span className='loginPage' onClick={handleSignout}>LogOut</span>}

        <div onClick={()=>{navigate('/create')}} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
