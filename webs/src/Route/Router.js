import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from '../SharaModule/Header/Header';
import Footer from '../SharaModule/Footer/Footer';
import { useDispatch } from 'react-redux';
import { check_myname, check_token } from '../Redux/AuthSlice';


const Home = lazy(() => import ( '../Component/Home/Home'));
const About = lazy(() => import ('../Component/About/About'));
const Shop = lazy(() => import ('../Component/Shop/Shop'));
const Product = lazy(() => import('../Component/Product/Product'));
const Blog = lazy(() => import('../Component/Blog/Blog'));
const Contact = lazy(() => import ('../Component/Contact/Contact'));
const Editproduct = lazy(() => import('../Component/Editproduct/Editproduct'))
const Register = lazy(() => import ('../Component/Registration/Register'));
const Login = lazy(() => import ( '../Component/Login/Login'));


export default function Rout() {
  const dispatch = useDispatch()
  
  const PublicRouteNames = [
    {
      path: '/register',
      Component: <Register/>
    },
    {
      path:'/login',
      Component:<Login/>
    }
  ];
  const PrivateRouteNames = [
    {
      path: '/',
      Component: <Home/>
    },
    {
      path: '/about',
      Component: <About/>
    },
    {
      path: '/shop',
      Component: <Shop/>
    },
    {
      path: '/product',
      Component: <Product/>
    },
    {
      path: '/blog',
      Component: <Blog/>
    },
    {
      path: '/contact',
      Component: <Contact/>
    },
    {
      path: '/product/detail/:id',
      Component: <Editproduct/>
    }
  ];
  useEffect(()=>{
    dispatch(check_token());
    dispatch(check_myname());
  },[dispatch]);

    function PrivateRoute({ children }){
      const token = 
      localStorage.getItem("token") || sessionStorage.getItem("token");

      return token !== null && token !== undefined ?(
        children
      ):(
        <Navigate to ='/login'/>
      );
    }
  return (
    <>
    <Suspense fallback ={<h2>Loading....</h2>}>
    <Router>
        <Header/>
        <Routes>
          {PublicRouteNames?.map((route, index) =>{
            return(
              <Route key={index + 1} exact path={route.path} element={route.Component}/>   
              
            );
          })}

          {PrivateRouteNames?.map((route, index) =>{
            return(
              <Route key={index +2} path={route.path} 
              element={<PrivateRoute>{route.Component}</PrivateRoute>}/>
                
              
            );
          })}
            
            
        </Routes>
        <Footer/>
    </Router>
    </Suspense>
    
    </>
  )
}
