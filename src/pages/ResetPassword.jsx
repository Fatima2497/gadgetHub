import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { resetPassToken } from "../features/user/userSlice";


const passwordSchema = yup.object({
  password: yup.string().required('Password is required')
});

const ResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const getToken = location.pathname.split("/")[2]
  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validationSchema: passwordSchema,
    onSubmit: values => {
      dispatch(resetPassToken({token:getToken,password:values.password}))
      navigate("/login")
    },
  })

  return (
    
    <>
      <Meta title={"Reset-Password"} />
      <BreadCrumb title="Reset-Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3 fw-bold">Create Account</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15 ">
                  <div>
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
                  <div className="mt-1">
                  </div>
                  <div>
                    {/* <Link to="/Forgotpassword" className="fw-bold">Forgot Password?</Link> */}
                  </div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Ok
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

export default ResetPassword;
