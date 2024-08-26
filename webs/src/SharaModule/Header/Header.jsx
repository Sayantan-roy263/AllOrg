import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLoggedout, handleredirect } from '../../Redux/AuthSlice';
import { profilepic } from "../../Redux/ProfilePic";
import { profileDetailsPath } from "../../Helper/Helper";
import './Header.css';

export default function Header() {
  const [is_login, setIs_login] = useState('');
  const { isLoggedIn } = useSelector((state) => state.content);
  const {pictureItem} = useSelector((state) => state.contpic);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const first_name = localStorage?.getItem("first_name");

  useEffect(() => {
    setIs_login(first_name);
  }, [first_name]);

  const logOut = () => {
    dispatch(handleLoggedout());
    navigate('/login')
  };
  useEffect(()=>{
    dispatch(profilepic());
  }, [isLoggedIn]);

  return (
    <>
      {/* <h2>This is header</h2> */}
      <nav className="navbar navbar-expand-md navbar-light">
        <h1 className="navbar-brand" >
          <img src="../image/apple1-bg.jpg.png"/>
          All Org
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item active">
              <NavLink to='/' className="nav-link mx-lg-2">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
                <NavLink to='/about' className="nav-link mx-lg-2">About</NavLink>
             
            </li> 
            <li className="nav-item active">
                <NavLink to='/shop' className="nav-link mx-lg-2">Shop</NavLink>
            </li>
            
            <li className="nav-item active">
                <NavLink to='/product' className="nav-link mx-lg-2">Product</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/blog' className="nav-link mx-lg-2">Blog</NavLink>          
            </li>
            <li className="nav-item active">
              <NavLink to='/contact' className="nav-link mx-lg-2">Contact</NavLink>
            </li>
    
          </ul>
       
        
        <div className="d-flex justify-content-center align-items-center gap-3" >
          <ul className="navbar-nav m-auto">
            <li className="nav-press">
              {isLoggedIn?<h7>{is_login}</h7>:null}
            </li>
            <li className="picture-profile">
              
            {isLoggedIn&&<img src={pictureItem?.data?.profile_pic ? profileDetailsPath(pictureItem?.data?.profile_pic):null} alt=""/>}
            </li>
            <li className="profile-button">
               
               {isLoggedIn ?(
                <NavLink to = '/login'
                onClick={() =>{
                  logOut();
                  dispatch(handleredirect());
                  
                }}
                
                >
                
                <button id="so">Sign Out</button>
                </NavLink>
             
              ):(
                <>
                <NavLink to ='/register'><button id="su">Sign up</button></NavLink>
               <NavLink to='/login' ><button id="si">Sign in</button></NavLink></>
                
              )}
               </li>
              
               </ul>
          </div>
          </div>
      </nav>
    </>
  );
}
