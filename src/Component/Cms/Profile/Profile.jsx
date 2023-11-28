import React, { useEffect } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Logout, userProfile } from '../../../Redux/Slice/Authslice'
import { profile_pic } from '../../../Helper'
const Profile = () => {
    const dispatch = useDispatch()
    const { Data, toggle } = useSelector((s) => s.AuthUser);
    console.log("User data", Data)

    useEffect(() => {
        dispatch(userProfile())
    }, [])

    const signOut = () => {
        dispatch(Logout())
    }

    useEffect(()=>{
        document.title="Restoran - Profile"
      },[])
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ letterSpacing: "5px" }}>Profile</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- Profile Start --> */}
            <div className="container-fluid body">
                <div className="main ">
                    <div className="topbar col-md-12">
                        {toggle ? <h1 className='userName' style={{ color: "#fea116" }}>Hello,
                            {Data.first_name} {Data.last_name}<br />
                        </h1> : " "}
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-1">
                            <div className="card text-center sidebar">
                                <div className="card-body">
                                    <img src={profile_pic(Data?.profile_pic)} alt="profile_pic" className='rounded-circle u' width={"150px"} height={"150px"} />
                                    <div className="mt-3">
                                        <h3 style={{ color: "#fff", textTransform: "uppercase", letterSpacing: "5px" }}>
                                            {Data?.first_name}
                                        </h3>
                                        <hr />
                                        <Link to="/">Home</Link>
                                        <hr />
                                        <Link to="#">Contact</Link>
                                        <hr /> 
                                        <Link to='#' onClick={signOut} >Sign Out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mt-1">
                            <div className="card mb-3 content">
                                <h1 className="m-3 pt-3 textColor">About</h1>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className='userDataColor'>First Name</h5>
                                        </div>
                                        <div className="col-md-9" style={{ color: "#fff", textTransform: "capitalize", letterSpacing: "2px" }}>
                                            {Data?.first_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className='userDataColor'>Last Name</h5>
                                        </div>
                                        <div className="col-md-9" style={{ color: "#fff", textTransform: "capitalize", letterSpacing: "2px" }}>
                                            {Data?.last_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-3 ">
                                            <h5 className='userDataColor'>Email</h5>
                                        </div>
                                        <div className="col-md-9" style={{ color: "#fff" }}>
                                            {Data?.email}
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="card mb-3 content">
                                <h1 className="m-3 textColor">Recent Products</h1>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5 className='userDataColor'>Product Name</h5>
                                        </div>
                                        <div className="col-md-9 text-secodary">
                                            Product Description
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Profile End --> */}
        </>
    )
}

export default Profile
