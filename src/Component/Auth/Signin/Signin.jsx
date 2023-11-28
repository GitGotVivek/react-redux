import React, { useEffect, useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import { RedirectToSignup, Signout, userSignin } from '../../../Redux/Slice/Authslice'
import { useDispatch, useSelector } from 'react-redux'

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { redirect, redirectToSignup } = useSelector((s) => s?.AuthUser);
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState({})
  console.log(redirect, "redirect")

  const validateUser = () => {

    let error = {}

    if (!user.email) {
      error.email = "email is required..!"
    }
    if (!user.password) {
      error.password = "password is required..!"
    }

    return error;
  }


  let name, value;
  const handleUserInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "email is required***" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "password is required***" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }

  }


  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      // window.location.pathname = getPathname;
      isInLoginPage && navigate("/");
    }
  };

  useEffect(() => {
    RedirectUser()
  }, [redirect])

  useEffect(() => {
    dispatch(RedirectToSignup(null))
  }, [redirectToSignup])

  const Register = () => {
    dispatch(Signout())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError(validateUser())
    setIsLoading(true);


    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    let signInData = {
      "email": user.email,
      "password": user.password
    }
    dispatch(userSignin(signInData))

  };

  useEffect(() => {
    document.title = "Restoran - Signin"
  }, [])
  
  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Get Login and Registered</h1>
          <span className="animated slideInDown p-2 " style={{ color: "#fea116", fontSize: "25px", borderBottom: "5px solid #575a64", borderRadius: "10px", letterSpacing: "3px" }}>Yourself to Book Your Table and Avail All the Facilities</span>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center my-3 text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">LogIn</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Hero End --> */}


      {/* <!-- SignIn Start --> */}
      <div className='body'>
        <form action="" className='form'>
          <h1>SIGNIN</h1>
          <input type="email" name='email' value={user?.email} onChange={(e) => handleUserInputs(e)} className='inputBox' placeholder='enter your email' autoComplete='off' />
          <span style={{ color: "red" }}>{" "} {error?.email} {""}</span>

          <input type="password" name='password' value={user?.password} onChange={(e) => handleUserInputs(e)} className='inputBox' placeholder='enter your password' autoComplete='off' />
          <span style={{ color: "red" }}>{" "} {error?.password} {""}</span>

          {/* <!-- Checkbox Start--> */}
          <div className="col-md-7 d-flex">
            <div className="form-check mb-3 mb-md-0">
              <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
              <label className="form-check-label" for="loginCheck"> Remember me </label>
            </div>
          </div>
          {/* <!-- Checkbox End--> */}

          {/* <input type="submit"  className='submit' value={"SignIn"} /> */}
          {isLoading ? (
            // Display the loader while loading is in progress
            <Link  className='submit'>
             Loading........
            </Link>
          ) : (
            // Render the link when not loading
            <Link onClick={onSubmit} className='submit'>
              SignIn
            </Link>
          )}
          <div className="col-md-6 d-flex justify-content-center">
            <Link to="#!" className='forgetpass'>Forgot password?</Link>
          </div>

          <div className='link'>
            {/* <span>Don't have an account!<Link to='/signup' onClick={Register} className='getsignup'> Get Sign Up</Link></span> */}
            <span>Don't have an account!<Link to='/register' onClick={Register} className='getsignup'> Get Register</Link></span>
          </div>

        </form >
      </div >
      {/* <!-- SignIn End --> */}
    </>
  )
}

export default Signin
