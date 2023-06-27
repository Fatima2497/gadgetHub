import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup';
import CustomInput from '../components/CustomInput'
import { forgetPassToken } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'

const forgetSchema = yup.object({
  email: yup.string().required('Email is required')
});


const Forgotpassword = () => {
  const dispatch = useDispatch() 
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgetSchema,
    onSubmit: values => {
      dispatch(forgetPassToken(values)) 
    },
  })
  return (
    <>
    <Meta title={"Forgot-Password"} />
    <BreadCrumb title="Forgot-Password" />
    <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 fw-bold">Reset Your Passsword</h3>
              <p className="text-center my-2 mb-3">We will send you an email to reset your password.</p>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15 ">
                <div>
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                </div>
                <div className="error">
                    {formik.touched.email && formik.errors.email}
                   </div>
                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type='submit'>Submit</button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Forgotpassword