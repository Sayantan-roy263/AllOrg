import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { create } from "../../Redux/CrudSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

export default function Shop() {
  const [prod, setProd] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState({});
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validation = () => {
    let error = {};
    if (!prod.title) {
      error.title = "please enter the title";
    }
    if (!prod.description) {
      error.description = "please enter the description";
    }
    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "title") {
      if (value.length === 0) {
        setProd({ ...prod, title: "" });
        setError({ ...error, title: "Title is required" });
      } else {
        setProd({ ...prod, title: value });
        setError({ ...error, title: "" });
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setProd({ ...prod, description: "" });
        setError({ ...error, description: "Description is required" });
      } else {
        setProd({ ...prod, description: value });
        setError({ ...error, description: "" });
      }
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("title", prod.title);
    formData.append("description", prod.description);
    formData.append("image", pic);
    dispatch(create(formData));
    // navigate("/product");
  };

  return (
    <>
      <section className="shopbanner position-relative w-100">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <h2 className="text-center">add your product</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="shop-banner">
     
      {/* <div className="shop-banner"> */}
      {/* <h2>Add your product here</h2>
      <img src="image/grocery1.jpg" alt="shop..."/> */}
      {/* </div> }
      </section> */}

      <section className="product-form  position-relative w-100">
        <h3>Create customized product</h3>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <form className="prod-form">
                <div className="form-group">
                  <label for="title">Title : </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    value={prod?.title}
                    onChange={(e) => postUserData(e)}
                  />
                </div>
                <span>{error?.title}</span>
                <div className="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={prod?.description}
                    onChange={(e) => postUserData(e)}
                  />
                </div>
                <span>{error?.description}</span>
                <div className="form-group">
                  <label for=" ">Image</label>
                  <input
                    type="file"
                    onChange={(e) => setPic(e.target.files[0])}
                    name="pic"
                    accept="image/*"
                  />
                  
                </div>

                <button type="submit" class="btn btn-product" onClick={Submit}>
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="prod-image-right">
              <img className="img-fluid" src="image/product-right.jpg" alt="product" />
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
