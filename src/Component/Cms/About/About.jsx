import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'; 

const About = () => {

    const [isExpanded, setExpanded] = useState()

    const toggleExpanded = (e) => {
        e.preventDefault()
        setExpanded(!isExpanded)
    };

    const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste provident, illo dolorum minus, unde, voluptates distinctio maxime mollitia fugit incidunt! Odit doloribus est nemo recusandae! Itaque quibusdam, sit ut voluptate rerum numquam architecto iste natus perspiciatis dolor. Id ipsam reprehenderit ipsum et dignissimos reiciendis aut debitis quaerat quas quos quia pariatur totam tenetur deserunt illum quisquam exercitationem ullam molestias consequatur, doloribus eius sapiente ipsa non. Soluta reprehenderit temporibus earum aperiam quaerat aspernatur dolores, pariatur tempora eum ad. Placeat, officiis optio laborum deserunt culpa tempora! Est beatae mollitia repellendus magni dolores autem, ad, quod minima fuga expedita asperiores assumenda eos."

    useEffect(()=>{
        document.title="Restoran - About"
      },[])

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

            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt='...' />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" alt='...' style={{ marginTop: "25%" }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" alt='...' />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" alt='...' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                            <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Restoran</h1>

                            <p className='mb-4 text-start expanded'>{isExpanded ? paragraphText : `${paragraphText.slice(0, 427)}...`}</p>

                            <Link to="" className="btn btn-primary py-3 px-5 mt-2" style={{ position: "relative", left: "-32%" }} onClick={toggleExpanded} >{isExpanded ? "Read less" : "Read more"}</Link>
                            {/* <p className="mb-4 text-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className="mb-4 text-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p> */}
                            {/* <p className="mb-4 text-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p className="mb-4 text-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p> */}

                            {/* <!-- <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                            <div className="ps-4">
                                <p className="mb-0">Years of</p>
                                <h6 className="text-uppercase mb-0">Experience</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                            <div className="ps-4">
                                <p className="mb-0">Popular</p>
                                <h6 className="text-uppercase mb-0">Master Chefs</h6>
                            </div>
                        </div>
                    </div>
                </div> --> */}
                            {/* <Link className="btn btn-primary py-3 px-5 mt-2" style={{ position: "relative", left: "-32%" }} to="">Read More</Link> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-xxl pt-5 pb-3">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                        <h1 className="mb-5">Our Master Chefs</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-primary mx-1" to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}

            {/* <!-- Back to Top --> */}
            {/* <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link> */}
 
        </>
    )
}

export default About
