import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import  FirebaseContext,{ AuthContext } from '../../store/firebaseContext';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Header() {
  const {user} = useContext(AuthContext)
  const {app} =useContext(FirebaseContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    const auth = getAuth(app);
    signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
      console.log(user)
      navigate('/login')
    }).then()
    .catch((error) => {
      console.error("An error occurred while signing out:", error);
    });
  
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
          <span>{user?user.displayName:"Login"}</span>
          <hr />
        </div>
        {user?<span onClick={handleLogout}>Logout</span>:null}
        <div className="sellMenu">
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
