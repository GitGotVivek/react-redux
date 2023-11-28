import React, { useState, useEffect } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { createProduct } from '../../../Redux/Slice/CmsSlice'

const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { redirectToList } = useSelector((s) => s?.CmsSlice)
    const [user, setUser] = useState({ title: "", description: "" })
    const [error, setError] = useState({})
    const [image, setImage] = useState()

    const validateProduct = () => {
        let error = {};

        if (!user.title) {
            error.title = ("Title is required...")
        }

        if (!user.description) {
            error.description = ("Description is required...")
        }

        return error

    }

    const Redirect = () => {
        let productTitle = localStorage.getItem("title");
        let isInRegisterPage = window.location.pathname.toLowerCase() === "/product";

        if (productTitle !== null && productTitle !== undefined && productTitle !== "") {
            // window.location.pathname = getPathname;
            isInRegisterPage && navigate("/getallproduct");
        }
    };

    useEffect(() => {
        Redirect()
    }, [redirectToList])

    let name, value;
    const handleUserInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        if (name === "title") {
            if (value.length === 0) {
                setError({ ...error, title: " Title is required..." })
                setUser({ ...user, title: " " })
            } else {
                setError({ ...error, title: " " })
                setUser({ ...user, title: value })
            }
        }

        if (name === "description") {
            if (value.length === 0) {
                setError({ ...error, description: " Description is required..." })
                setUser({ ...user, description: " " })
            } else {
                setError({ ...error, description: " " })
                setUser({ ...user, description: value })
            }
        }

    };

    const onSubmitData = async (e) => {
        e.preventDefault()
        setError(validateProduct());

        let formData = new FormData();
        formData.append("title", user.title);
        formData.append("description", user.description);
        formData.append("image", image);
        dispatch(createProduct(formData))
    }
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Create Product</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- Product Start --> */}
            <div className='body'>
                <form className='form'>
                    <h1>Create New Product Here...</h1>
                    <div className="form-group">
                        <div>
                            <input
                                className="form-control formInput inputBox"
                                name="title"
                                value={user.title}
                                onChange={(e) => handleUserInputs(e)}
                                placeholder='Enter the Title...'
                            />
                            <span style={{ color: "red", marginLeft: "24px" }}>
                                {" "}
                                {error?.title}{" "}
                            </span>
                        </div>

                        <div>
                            <textarea cols={5} rows={5}
                                className="form-control formInput inputBox"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="description"
                                value={user?.description}
                                onChange={(e) => handleUserInputs(e)}
                                placeholder='Write Your Description Here...'
                            />
                            <span style={{ color: "red", marginLeft: "24px" }}>
                                {" "}
                                {error?.description}{" "}
                            </span>
                        </div>

                        <div class="mb-3">
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                name="img"
                                accept="image/*"
                                className="form-control upload "
                            />
                            {image !== "" && image !== undefined && image !== null ? (
                                <img
                                    style={{ height: "180px" }}
                                    src={URL.createObjectURL(image)}
                                    alt=""
                                    className="upload-img"
                                />
                            ) : (
                                <>{image === "" && <p>Drag or drop content here</p>}</>
                            )}
                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary mx-5 submitData" onClick={onSubmitData} >
                        Submit
                    </button>


                </form>
            </div>
            {/* <!-- Product End --> */}
        </>
    )
}

export default Product
