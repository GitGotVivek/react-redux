import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect_To } from '../../../Redux/Slice/Authslice';

const Home = () => {

    const { redirect, toggle } = useSelector((s) => s?.AuthUser);
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(Redirect_To(null))
    }, [redirect])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
    };

    const [isExpanded, setExpanded] = useState()
    const toggleExpanded = (e) => {
        e.preventDefault()
        setExpanded(!isExpanded)
    };


    const paragraphText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste provident, illo dolorum minus, unde, voluptates distinctio maxime mollitia fugit incidunt! Odit doloribus est nemo recusandae! Itaque quibusdam, sit ut voluptate rerum numquam architecto iste natus perspiciatis dolor. Id ipsam reprehenderit ipsum et dignissimos reiciendis aut debitis quaerat quas quos quia pariatur totam tenetur deserunt illum quisquam exercitationem ullam molestias consequatur, doloribus eius sapiente ipsa non. Soluta reprehenderit temporibus earum aperiam quaerat aspernatur dolores, pariatur tempora eum ad. Placeat, officiis optio laborum deserunt culpa tempora! Est beatae mollitia repellendus magni dolores autem, ad, quod minima fuga expedita asperiores assumenda eos."

    useEffect(()=>{
        document.title="Restoran - Home"
      },[])
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-xxl bg-white p-0">
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                {/* <h1 className="display-3 text-white animated slideInLeft ">Hello,  */}
                                {/* <span style={{color:"#fea116", fontFamily:"monospace",borderBottom:"2px solid #fea116", textTransform:"capitalize"}}>{Name}</span> */}
                                {/* </h1> */}
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                {toggle ? " " : <Link to="/login" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Log In</Link>}
                                {/* <Link to="/login" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Log In</Link> */}
                                <Link to="/booking" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="img/hero.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}

            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                    <h5>Master Chefs</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Quality Food</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                    <h5>Online Order</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                    <h5>24/7 Service</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

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
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Menu Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                        <h1 className="mb-5">Most Popular Items</h1>
                    </div>
                    <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" to="#tab-1">
                                    <i className="fa fa-coffee fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Popular</small>
                                        <h6 className="mt-n1 mb-0">Breakfast</h6>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" to="#tab-2">
                                    <i className="fa fa-hamburger fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Special</small>
                                        <h6 className="mt-n1 mb-0">Launch</h6>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" to="#tab-3">
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                    <div className="ps-3">
                                        <small className="text-body">Lovely</small>
                                        <h6 className="mt-n1 mb-0">Dinner</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{ width: "80px" }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Menu End --> */}

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

            {/* <!-- Testimonial Start --> */}
            <div className="container">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            {/* {/ Content for slide 1 /} */}
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "4320px", transform: "translate3d(-1080px,0px, 0px)" }}>
                                    <div className="owl-item cloned" style={{ width: "516px", marginRight: "24px" }}>
                                        <div className="testimonial-item bg-transparent border rounded p-4">
                                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                            <div className="d-flex align-items-center">
                                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{ width: "50px", height: "50px" }} alt='...' />
                                                <div className="ps-3">
                                                    <h5 className="mb-1">Client Name</h5>
                                                    <small>Profession</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial-item bg-transparent border rounded p-4">
                                        {/* {/ Content for slide 2 /} */}
                                    </div>
                                </div>
                                {/* {/ Add more slides as needed /} */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            {/* {/ Content for slide 1 /} */}
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "4320px", transform: "translate3d(-1080px,0px, 0px)" }}>
                                    <div className="owl-item cloned" style={{ width: "516px", marginRight: "24px" }}>
                                        <div className="testimonial-item bg-transparent border rounded p-4">
                                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                            <div className="d-flex align-items-center">
                                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{ width: "50px", height: "50px" }} alt='...' />
                                                <div className="ps-3">
                                                    <h5 className="mb-1">Client Name</h5>
                                                    <small>Profession</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial-item bg-transparent border rounded p-4">
                                        {/* {/ Content for slide 2 /} */}
                                    </div>
                                </div>
                                {/* {/ Add more slides as needed /} */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            {/* {/ Content for slide 1 /} */}
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "4320px", transform: "translate3d(-1080px,0px, 0px)" }}>
                                    <div className="owl-item cloned" style={{ width: "516px", marginRight: "24px" }}>
                                        <div className="testimonial-item bg-transparent border rounded p-4">
                                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                            <div className="d-flex align-items-center">
                                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{ width: "50px", height: "50px" }} alt='...' />
                                                <div className="ps-3">
                                                    <h5 className="mb-1">Client Name</h5>
                                                    <small>Profession</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial-item bg-transparent border rounded p-4">
                                        {/* {/ Content for slide 2 /} */}
                                    </div>
                                </div>
                                {/* {/ Add more slides as needed /} */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            {/* {/ Content for slide 1 /} */}
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "4320px", transform: "translate3d(-1080px,0px, 0px)" }}>
                                    <div className="owl-item cloned" style={{ width: "516px", marginRight: "24px" }}>
                                        <div className="testimonial-item bg-transparent border rounded p-4">
                                            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                            <div className="d-flex align-items-center">
                                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style={{ width: "50px", height: "50px" }} alt='...' />
                                                <div className="ps-3">
                                                    <h5 className="mb-1">Client Name</h5>
                                                    <small>Profession</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial-item bg-transparent border rounded p-4">
                                        {/* {/ Content for slide 2 /} */}
                                    </div>
                                </div>
                                {/* {/ Add more slides as needed /} */}
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Home
