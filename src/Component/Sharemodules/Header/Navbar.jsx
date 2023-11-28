import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { Logout } from '../../../Redux/Slice/Authslice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch()
    const { toggle } = useSelector((s) => s.AuthUser)
    let Name = localStorage.getItem("Name")
    const log_out = () => {
        dispatch(Logout())
    }


    return (
        <>
            {/* <!-- Navbar & /Hero Start --> */}
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/" className="nav-item nav-link active" >Home</Link>
                            {/* <a href="" class="btn btn-primary py-2 px-4">Book A Table</a> */}
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Service</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            {toggle ? <Link to="/product" className="nav-item nav-link">Product</Link> : " "}
                            {toggle ? <Link to="/userprofile" className="nav-item nav-link">Profile</Link> : " "}
                            {toggle ? <Link className="nav-item nav-link" to="/login" onClick={log_out}>Logout</Link> : " "}
                            {toggle ? <Link className="  btn btn-primary py-2 px-4 toggltUserName">{Name}</Link> : ""}
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Navbar & Hero End --> */}
        </>
    )
}

export default Navbar
