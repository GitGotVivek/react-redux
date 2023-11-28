import React, { useEffect, useState } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { RedirectToList, deleteProduct, getAllProduct, removeTitle } from '../../../Redux/Slice/CmsSlice'
import { Link } from 'react-router-dom'
import { image } from '../../../Helper'
import SweetAlertComponent from '../../SweetAlert/SweetAlert'
import { Pagination } from '@mui/material'
import { writeComment } from '../../../Redux/Slice/CommentSlice'

const Getproduct = () => {
    const dispatch = useDispatch()
    const { redirectToList, totalpage, Data } = useSelector((s) => s?.CmsSlice)
    const [isDelete, setisDelete] = useState("")
    const [page, setPage] = useState("")
    const [Delete_id, setDelete_id] = useState("")
    const [comment, setComment] = useState({ body: "", userId: "", postId: "" })
  
    const handleChange = (e, pageno) => {
        console.log(pageno, "pageno")
        setPage(pageno);
        dispatch(getAllProduct(
            {
                page: pageno,
                perpage: 10

            }));

    };

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    useEffect(() => {
        dispatch(RedirectToList(null))
    }, [redirectToList])

    const RemoveTitle = () => {
        dispatch(removeTitle())
    }

    const delete_funcc = () => {
        if (Delete_id !== "") {
            dispatch(deleteProduct({ id: Delete_id })).then(() => { dispatch(getAllProduct()) })
        }
        setDelete_id("");
        setisDelete(false);
    }

    const addComment = async (e) => {
        e.preventDefault()
        console.log("jjjjj")

        let formData = new FormData();
        formData.append("body", comment.body);
        formData.append("userId", comment.userId);
        formData.append("postId", comment.postId);
        dispatch(writeComment(formData))
    }



    return (
        <>

            {/* <!-- Hero Start --> */}
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Get All Product</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">All Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Hero End --> */}




            {/* <div className="container">

                <div className="row gy-3 my-3">
                    {Data?.map((item) => {
                        return (
                            <div className=" newCard col-sm-6 col-md-4 col-lg-3">
                                <div className="card h-100">
                                    <div className='cardImages'>
                                        <img src={image(item?.image)} className="card-img-top cardImg" alt="..." />
                                    </div> */}
            {/* <div className="card-body">
                                        <h5 className="card-title">{item?.title}</h5>
                                        <p className="card-text">{item?.description}</p>
                                    </div> */}
            {/* <div className='cardButton'>
                                        <Link to="#" className="btn btn-primary editBtn mx-2 w-50">Edit</Link>
                                        <Link to="#" className="btn btn-primary w-50">Delete</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}



            {/* <div className="container">
                {Data?.map((item) => {
                    return (
                        <div className="row">
                            <div className="col-md-4 my-2">
                                <div className="card">
                                    <img src={image(item?.image)} className="card-img-top" alt="Image 1" />
                                    {/* <div className="card-body">
                                        <h5 className="card-title">{item?.title}</h5>
                                        <p className="card-text">{item?.description}</p>
                                    </div> */}
            {/* <div className="newCardBtn"> */}
            {/* <Link to={`/updateproduct/${item._id}`} className='btn btn-primary mr cardBtn cardBtn1 mx-2 w-25'>Edit</Link> */}
            {/* <Link to="" onClick={() => { */}
            {/* // setDelete_id(item?._id); */}
            {/* // setisDelete(true); */}
            {/* // }} className="btn btn-primary mr cardBtn cardBtn1">Delete</Link> */}

            {/* </div> */}
            {/* <div><input type="text" className='my-2' placeholder='Write Comment...' style={{borderRadius:"10px", width:"100%", padding:"5px"}}/></div> */}
            {/* </div> */}
            {/* // </div> */}
            {/* </div> */}
            {/* // ) */}
            {/* // })} */}
            {/* // </div> */}




            {/* <div>
                <Link to='/product' onClick={RemoveTitle} className='addProduct btn btn-primary py-2 px-4'>Add Product</Link>
            </div>  */}
            <div className=" cardBody">
                <div className="row">
                    {Data?.map((item) => {
                        return (
                            <div className=" col-sm-6 col-md-4 col-lg-4">
                                <div className="newCard">
                                    <div className='cardImages'>
                                        <img src={image(item?.image)} alt="..." className='newCard-img "img-fluid"' />
                                    </div>
                                    <div className="newCard-body">
                                        <p className='newCard-title'>{item?.title}</p>
                                        <p className='newCard-info'>{item?.description}</p>

                                        <button className='newCard-btn'>Know more</button>
                                        <div className="newCardBtn">
                                            <Link to={`/updateproduct/${item._id}`} className='btn btn-primary mr cardBtn cardBtn1'>Edit</Link>
                                            <Link to="" onClick={() => {
                                                setDelete_id(item?._id);
                                                setisDelete(true);
                                            }} className="btn btn-primary mr cardBtn cardBtn1">Delete</Link>
                                        </div>
                                        <div className='comment'>
                                            <input type="text" onChange={(e)=> setComment(e)} placeholder='write your comment...' />
                                            <button type='submit' onClick={addComment}>Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            {isDelete && (
                <SweetAlertComponent
                    confirm={delete_funcc}
                    cancle={() => setisDelete(false)}
                    title={"Are you sure?"}
                    subtitle={"You will not be able to recover!"}
                />
            )}

            {Data?.length !== 0 ? (

                <Pagination count={totalpage} onChange={handleChange} page={page} />

            ) : (

                <>

                </>
            )}
        </>
    )
}

export default Getproduct
