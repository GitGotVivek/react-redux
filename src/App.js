import './App.css';
import Navbar from './Component/Sharemodules/Header/Navbar';
import Home from './Component/Cms/Home/Home';
import About from './Component/Cms/About/About';
import Profile from './Component/Cms/Profile/Profile';
import Signin from './Component/Auth/Signin/Signin';
import Signup from './Component/Auth/Signup/Signup';
import Errorpage from './Component/Cms/Errorpage/Errorpage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Component/Sharemodules/Footer/Footer';
import Booking from './Component/Cms/Booking/Booking';
import Contact from './Component/Cms/Contact/Contact';
import Menu from './Component/Cms/Menu/Menu';
import Service from './Component/Cms/Service/Service';
import { Check_Token } from './Redux/Slice/Authslice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Product from './Component/Cms/Product/Product';
import Getproduct from './Component/Cms/Product/Getproduct';
import Edit_Update from './Component/Cms/Product/Edit_Update';

function App() {
  const dispatch = useDispatch()
  const { toggle } = useSelector((s) => s.AuthUser);
  function PrivateRoute({ children }) {
    console.log(children, "children");
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {token ? "" : toast("Please, Get Login First...!")} 
      </>

    );
  }

  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Signup />,
    },

    {
      path: "/login",
      Component: <Signin />,
    },

    {
      path: "/",
      Component: <Home />,
    },

    {
      path: "/userprofile",
      Component: <Profile />,
    },

    {
      path: "/product",
      Component: <Product />,
    },

    {
      path: "/getallproduct",
      Component: <Getproduct />,
    },

    {
      path: "/contact",
      Component: <Contact />,
    },

    {
      path: "/updateproduct/:id",
      Component: <Edit_Update />,
    },

  ];


  const PrivateRouteNames = [

    {
      path: "/about",
      Component: <About />,
    },

    {
      path: "/booking",
      Component: <Booking />,
    },

    {
      path: "/menu",
      Component: <Menu />,
    },

    {
      path: "/service",
      Component: <Service />,
    },

    {
      path: "*",
      Component: <Errorpage />,
    },
  ];

  useEffect(() => {
    dispatch(Check_Token())
  }, [toggle])

  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  exact
                  path={route.path}
                  element={route.Component}
                />
              );
            })}


            {PrivateRouteNames?.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route.Component}</PrivateRoute>}
                />
              );
            })}
          </Routes>
          <Footer />
        </Router>

      </div>
    </>
  );
}

export default App;
