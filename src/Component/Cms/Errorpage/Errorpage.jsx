import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
    return (

        <>

        {/* <!-- Hero Start --> */} 
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div> 
            {/* <!-- Hero End --> */}

            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        Type the correct URl, you dumbass..!
                    </p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>

        </>
    )
}

export default Errorpage
