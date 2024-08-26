import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, showDetails } from "../../Redux/CrudSlice";
import { productpic } from "../../Helper/Helper";
import { Link } from "react-router-dom";
import SweetAlertComponent from "../SweetAlert/SweetAlert";
import './Product.css';

export default function Product() {
  const { list, totalpage } = useSelector((s) => s.contkey);

  const [totalnopage, setPage] = useState(0);

  const [delete_id, setDelete_id] = useState("");

  const [isDelete, setIsDelete] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showDetails());
  }, []);
  

  const handleChange = (value, pageno) => {
    setPage(pageno);
    let left = {
      page: pageno,
      perpage: 10,
    };
    dispatch(showDetails(left));
  };
  const delete_func = (id) => {
    if (delete_id !== "") {
      let formData = {
        id: delete_id,
      };
      dispatch(deleteDetails(formData)).then(() => {
        dispatch(showDetails());
      });
    }
    setDelete_id("");
    setIsDelete(false);
  };

  return (
    <>
    <section className="product-banner position-relative w-100">
    <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <h2 className="text-center">Our added products</h2>
            </div>
          </div>
        </div>
    </section>
    <section className="product-card position-relative w-100 justify-content-center align-items-center">
    <div className="container">
      <div className="content">
        {list?.map((value) => {
          return (
            <>
              <div className="item">
                <div className="card shadow" style={{ width: "16rem" }}>
                  <div className="inner">
                  <img src={productpic(value?.image)} className="card-img-top" alt="product1" style={{height: "10rem"}} />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{value?.title}</h4>
                    <p className="card-text">
                      {value?.description}
                    </p>
                    <Link
                  to={`/product/detail/${value?._id}`} className="btn btn-primary">
                      Edit
                    </Link>
                    <Link
                  to=""
                  onClick={() => {
                    setDelete_id(value?._id);
                    setIsDelete(true);
                  }}
                  className="btn btn-primary"
                >
                  Delete
                </Link>
                  </div>
                </div>
                
                
              </div>
            </>
          );
        })}
        {isDelete && (
          <SweetAlertComponent
            confirm={delete_func}
            cancel={() => setIsDelete(false)}
            title={"Are you sure?"}
            subtitle={"You will not be able to recover!"}
          />
        )}
        </div>
        </div>
        </section>
        <div className="pagi">
        <Pagination
          // page={totalnopage}
          count={totalpage}
          
          onChange={handleChange}
          // color="green"
        />
      </div>
    </>
  );
}
