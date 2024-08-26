import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editDetails, updateDetails } from '../../Redux/CrudSlice';
import { useParams } from 'react-router-dom';
import { productpic } from '../../Helper/Helper';
import './Editproduct.css';

export default function Editproduct() {
  const {id} = useParams();
  const [prod, setProd] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState({});
  const [pic, setPic] = useState("");
  const {editProduct} = useSelector((state)=>state.contkey);
  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(editDetails (id))
    },[id]);

    const validation=()=>{
      let error={};
      if(!prod.title){
        error.title = "please enter the title"
      }
      if(!prod.description){
        error.description = "please enter the description"
      }
      return error;
  
    };
    let name, value;
  const postUserData = (e) =>{
    name=e.target.name;
    value=e.target.value;
     if(name==='title'){
      if(value.length===0){
        setProd({...prod, title: ''});
        setError({...error, title:"Title is required"});
      }else{
        setProd({...prod, title: value});
        setError({...error, title:""})
      }
     }
     if(name==='description'){
      if(value.length===0){
        setProd({...prod, description:''});
        setError({...error, description:"Description is required"});
      }else{
        setProd({...prod, description: value});
        setError({...error, description:""});
      }
     }
  };
  const Submit=(e)=>{
    e.preventDefault();
    setError(validation());
    
    let formData =  new FormData();
    formData.append("id",id);
    formData.append("title", prod.title);
    formData.append("description", prod.description);
    formData.append("image", pic);
    
    dispatch(updateDetails(formData));
  
  }
  useEffect(()=>{
    setProd({
      title:editProduct?.title,
      description:editProduct?.description,

    });
  },[editProduct])

  return (
    <>
    <section className='edit-banner position-relative w-100'>
       <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12">
            <h2 className='text-center'>edit your product</h2>
          </div>
        </div>
       </div>
    </section>
    <section className='edited-form position-relative w-100'>
      <h3>edit the product</h3>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
        <div className="col-lg-6">
              <form className="edit-form">
                <div class="form-group">
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
                <div>
                <img src={editProduct?.image?productpic(editProduct?.image):null} alt="editimg"/>
                </div>

                <button type="submit" class="btn btn-product" onClick={Submit}>
                  Submit
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
      {/* <form>
        <div className="form-group-title">
          <label for="exampleInputtitle">Title</label>
          <input
            type="text"
            className="form-control-title"
            id="exampleInputtitle"
            name="title"
            value={prod.title}
            onChange={(e)=>postUserData(e)}
            aria-describedby="titleHelp"
          />
        </div>
        <div className="form-group-title">
          <label for="exampleInputdescription">Description</label>
          <input type="text" 
          className="form-control-title"
          id="exampleInputdescription" 
          name="description"
          value={prod.description}
        
          onChange={(e)=>postUserData(e)}
          />
          
        </div>
        <div className="form-group-title">
          <label for=" ">Image</label>
          <input type="file"
          onChange = {(e) => setPic(e.target.files[0])}
          name="pic" accept="image/*" />
          <span style={{ color: "red", marginLeft: "24px" }}></span>
        </div>
        <div> */}
        {/* {
                pic !== null && pic !== undefined && pic !== "" ? (
                    <img src={URL.imageURL(pic)} alt="product" className="productimg"/>
                ) : (
                    <>
                      {pic?.image === "" ? (
                        <img src="../image/error.jpg"  alt="error" className="errorimg"/>
                      ) : (
                       <img src={`${productpic}/${editProduct?.image}`} alt="editimg" />
                      )}
                    </>
                )
            } */}
            {/* <img src={editProduct?.image?productpic(editProduct?.image):null} alt="editimg"/>
        </div>

        <button type="submit" class="btn btn-primary" onClick={Submit}>
          Submit
        </button>
      </form> */}
    </>
  )
}
