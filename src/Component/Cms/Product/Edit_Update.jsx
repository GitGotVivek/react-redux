import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editProduct, updateProduct } from '../../../Redux/Slice/CmsSlice';

const Edit_Update = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const { Edit  } = useSelector((s) => s.CmsSlice);
  const [user, setUser] = useState({ title: "", description: "" })
  const [error, setError] = useState({})
  const [image, setImage] = useState()
  const { id } = useParams()
  console.log("ID : ", id)

  useEffect(() => {
    dispatch(editProduct(id))
  }, [])

  useEffect(() => {
    if (Edit !== null) {
      setUser({
        title: Edit.title,
        description: Edit.description,
      })

    }
  }, [Edit])

  const onSubmitData = (e) => {
    e.preventDefault();
    
    let formData=new FormData()
     formData.append("title",user.title)
     formData.append("description",user.description)
     formData.append("id",id)
     formData.append("image",image)
    dispatch(updateProduct(formData))
  }

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

  console.log(Edit, "Edit")
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

            <div>
              <input type="file"
                onChange={(e) => setImage(e.target.files[0])}
                name="img"
                accept="image/*"
                class="form-control" />

              {image !== "" &&
                image !== undefined &&
                image !== null ? (
                <img
                  height="40px"
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="upload-img"
                />

              ) : (
                <>
                  {Edit?.image === "" ? (
                    <img
                      height="70px"
                      src={image}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <img
                      height="60px"
                      src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${Edit?.image}`}
                      alt=""
                      className="upload-img"
                    />
                  )}
                </>
              )}
              {image === "" && (
                <p>Drag or drop content here</p>
              )}
            </div>

            {/* <div class="mb-3">
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
            </div> */}

          </div>

          <button type="submit" className="btn btn-primary mx-5 submitData" onClick={onSubmitData} >
            Update
          </button>


        </form >
      </div >
      {/* <!-- Product End --> */}
    </>
  )
}

export default Edit_Update
