import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";


const Signup = () => {
  const dispatch = useDispatch()

  const signupSchema = yup.object({
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('lastname is Required'),
    email: yup.string().required('Email is required').email('Email should be valid '),
    password: yup.string().required('Password is required'),
    mobile: yup.string().required('Mobile is required')
  });

    const formik = useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        password: ''
      },
      validationSchema: signupSchema,
      onSubmit: values => {
        dispatch(registerUser(values))
      },
    })

  return (
    <>
      <Meta title={"Create-Acount"} />
      <BreadCrumb title="Create-Account" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3 fw-bold">Create Account</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15 ">
                  <div>
                   <CustomInput 
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                   />
                  </div>
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                   </div>
                  <div>
                  <CustomInput 
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                   />
                  </div>
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                   </div>
                  <div>
                  <CustomInput 
                    type="number"
                    name="mobile"
                    placeholder="Mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur('mobile')}
                   />
                  </div>
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                   </div>
                   <div>
                  <CustomInput 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                   />
                  </div>
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                   </div>
                  <div className="mt-1">
                  <CustomInput 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange('password')}
                    onBlur={formik.handleBlur("password")}
                   />
                  </div>
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                   </div>
                  <div>
                    {/* <Link to="/Forgotpassword" className="fw-bold">Forgot Password?</Link> */}
                  </div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
