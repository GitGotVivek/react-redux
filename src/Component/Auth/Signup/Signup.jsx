import React, { useState, useEffect } from 'react'
import './Signup.css'
import { userSignup } from '../../../Redux/Slice/Authslice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { redirectToSignup } = useSelector((s) => s?.AuthUser);
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "", password: "" })
    const [error, setError] = useState({})
    const [profile_pic, setProfile_pic] = useState()

    const validateUser = () => {

        let error = {}

        if (!user.first_name) {
            error.first_name = "first name is required..!"
        }
        if (!user.last_name) {
            error.last_name = "last name is required..!"
        }
        if (!user.email) {
            error.email = "email is required..!"
        }
        if (!user.password) {
            error.password = "password is required..!"
        }

        return error;
    }

    const RedirectUser = () => {
        let userName = localStorage.getItem("Name");
        let isInRegisterPage = window.location.pathname.toLowerCase() === "/register";

        if (userName !== null && userName !== undefined && userName !== "") {
            // window.location.pathname = getPathname;
            isInRegisterPage && navigate("/login");
        }
    };


    useEffect(() => {
        RedirectUser()
    }, [redirectToSignup])

    let name, value;
    const handleUserInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        if (name === "first_name") {
            if (value.length === 0) {
                setError({ ...error, first_name: "first name is required***" });
                setUser({ ...user, first_name: "" });
            } else {
                setError({ ...error, first_name: "" });
                setUser({ ...user, first_name: value });
            }
        }

        if (name === "last_name") {
            if (value.length === 0) {
                setError({ ...error, last_name: "last name is required***" });
                setUser({ ...user, last_name: "" });
            } else {
                setError({ ...error, last_name: "" });
                setUser({ ...user, last_name: value });
            }
        }

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

    const onSubmit = (e) => {
        e.preventDefault()
        setError(validateUser());
        let formData = new FormData();
        formData.append("first_name", user.first_name);
        formData.append("last_name", user.last_name);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("profile_pic", profile_pic);
        dispatch(userSignup(formData));
    }

    useEffect(() => {
        document.title = "Restoran - Signup"
    }, [])
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Get Login and Registered</h1>
                    <span className=" animated slideInDown p-2 " style={{ color: "#fea116", fontSize: "25px", borderBottom: "5px solid #575a64", borderRadius: "10px", letterSpacing: "3px" }}>Yourself to Book Your Table and Avail All the Facilities</span>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center my-3 text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Register</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- SignUp Start --> */}
                <div className='body'>
                    <form action="" className='form'>
                        <h1>SIGNUP</h1>
                        <input type="text" name='first_name' value={user?.first_name} onChange={(e) => handleUserInputs(e)} className='inputBox signuinputbox' placeholder='enter your first name' autoComplete='off' />
                        <span style={{ color: "red" }}>{" "} {error?.first_name} {""}</span>

                        <input type="text" name='last_name' value={user?.last_name} onChange={(e) => handleUserInputs(e)} className='inputBox signuinputbox' placeholder='enter your last name' autoComplete='off' />
                        <span style={{ color: "red" }}>{" "} {error?.last_name} {""}</span>

                        <input type="email" name='email' value={user?.email} onChange={(e) => handleUserInputs(e)} className='inputBox signuinputbox' placeholder='enter your email' autoComplete='off' />
                        <span style={{ color: "red" }}>{" "} {error?.email} {""}</span>

                        <input type="password" name='password' value={user?.password} onChange={(e) => handleUserInputs(e)} className='inputBox signuinputbox' placeholder='enter your password' autoComplete='off' />
                        <span style={{ color: "red" }}>{" "} {error?.password} {""}</span>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                Image
                            </label>
                            <input
                                type="file"
                                onChange={(e) => setProfile_pic(e.target.files[0])}
                                name="img"
                                accept="image/*"
                                class="form-control"
                            />
                            {profile_pic !== "" && profile_pic !== undefined && profile_pic !== null ? (
                                <img
                                    style={{ height: "180px" }}
                                    src={URL.createObjectURL(profile_pic)}
                                    alt=""
                                    className="upload-img"
                                />
                            ) : (
                                <>{profile_pic === "" && <p>Drag or drop content here</p>}</>
                            )}
                        </div>


                        <input type="submit" className='submit' onClick={onSubmit} value={"SignUp"} />
                        <div className='link'>
                            <span>Already have account!<Link to='/login' className='getsignup'> Get Login</Link></span>
                        </div>

                    </form >
                </div >
            {/* <!-- SignUp End --> */}

        </>
    )
}

export default Signup
