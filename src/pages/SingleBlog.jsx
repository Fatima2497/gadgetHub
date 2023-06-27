import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import blog from "../images/blog-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getaBlog } from "../features/blog/blogSlice";
import moment from "moment/moment";

const SingleBlog = () => {
  const disptach = useDispatch();

  const blogState = useSelector((state)=>state?.blog?.singleblog)
  const location = useLocation()

  const getblogId = location.pathname.split("/")[2]
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    disptach(getaBlog(getblogId));
  };


  return (
    <>
     <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title}  />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title} </h3>
              <img src={blogState?.images[0]?.secure_url} className="img-fluid w-100 my-4" alt="blog" />
              <p dangerouslySetInnerHTML={{__html: blogState?.description}}>
                
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog