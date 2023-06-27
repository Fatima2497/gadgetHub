import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getaUser, updateUser } from "../features/user/userSlice";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {FiEdit} from 'react-icons/fi'

const profileSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is Required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be valid "),
  mobile: yup.string().required("Mobile is required"),
});

const Profile = () => {

    const locat = useLocation()
    const getID = locat.pathname.split('/')[2]
    
    useEffect(()=>{
        dispatch(getaUser(getID))
    },[])

    const dispatch = useDispatch()
    const authState = useSelector((state)=>state?.auth?.getprofile)
    const [edit, setEdit] = useState(true)
  
   
  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      firstname: authState?.firstname,
      lastname: authState?.lastname,
      mobile: authState?.mobile,
      email: authState?.email,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateUser(values))
      setEdit(true)
    },
  });
  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Update Profile</h3>
                    <FiEdit className="fs-3" onClick={()=> setEdit(false)} />
                </div>
            </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-3">
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                  disabled={edit}
                />
              </div>
              <div className="error mt-2">
                {formik.touched.firstname && formik.errors.firstname}
              </div>
              <div className="mt-3">
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                  disabled={edit}
                />
              </div>
              <div className="error mt-2">
                {formik.touched.lastname && formik.errors.lastname}
              </div>
              <div className="mt-3">
                <CustomInput
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  disabled={edit}
                />
              </div>
              <div className="error mt-2">
                {formik.touched.mobile && formik.errors.mobile}
              </div>
              <div className="mt-3">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  disabled={edit}
                />
              </div>
              <div className="error mt-2">
                {formik.touched.email && formik.errors.email}
              </div>
              {
                edit===false && <button type="submit" className="button mt-3">
                Save
              </button>
              }
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
