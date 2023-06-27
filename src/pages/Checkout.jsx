import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getuserCart, userOrder } from '../features/user/userSlice';
import { useFormik } from 'formik';
import * as  yup from 'yup'
import CustomInput from '../components/CustomInput';

const orderSchema = yup.object({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('lastname is Required'),
  address: yup.string().required('Address is required'),
  state: yup.string().required('State is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  pincode: yup.string().required('PinCode is required'),
});

const Checkout = () => {
  const dispatch = useDispatch()
  const [totalAmount, setTotalAmount] = useState(null);
  const [shipingInfo, setShipingInfo] = useState(null)
  const carts = useSelector((state)=>state?.auth?.getacart)

  console.log(shipingInfo);
  useEffect(()=>{
    dispatch(getuserCart())
  },[])

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carts?.length; i++) {
      sum = sum + Number(carts[i].quantity) * carts[i].price;
      setTotalAmount(sum);
    }
  }, [carts]);

  const formik = useFormik({
    initialValues: {
      firstname:"",
      lastname:"",
      address:"",
      state:"",
      country:"",
      city:"",
      pincode:"",
    },
    validationSchema: orderSchema,
    onSubmit: values => {
      const orderItems = carts.map((item) => ({
        product: item.productId?._id,
        quantity: item.quantity,
        color: item.color?._id,
        price: item.price,
      }));

      const orderData = {
        shippingInfo: values,
        orderItems: orderItems, // Add your order items array here
        totalAmount: totalAmount,
        totalAmountAfterDiscount: 700,
        paymentInfo: {}, // Add payment info if required
      };
     
      dispatch(userOrder(orderData))
      formik.resetForm()
    },
  })

  return (

    <>
      <section className="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6 ms-5">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Fatima Hashmi (hashmif997@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="country" value={formik.values.country} onChange={formik.handleChange("country")} onBlur={formik.handleBlur("country")} className="form-control form-select" id="">
                    <option defaultValue="Select Country"  >
                      Select Country
                    </option>
                    <option value="Pakistan" >
                      Pakistan
                    </option>
                  </select>
                  <div className="error ms-2 mt-3">
                    {
                      formik.touched.country && formik.errors.country
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.values.lastname}
                  />
                </div>
                <div className="error mt-3">
                    {
                      formik.touched.firstname && formik.errors.firstname
                    }
                  </div>
                  <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.values.lastname}
                  />
                </div>
                <div className="error mt-2">
                    {
                      formik.touched.lastname && formik.errors.lastname
                    }
                  </div>
                <div className="w-100">
                <CustomInput
                    type="text"
                    name="address"
                    placeholder="Apartment,Suite"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.values.address}
                  />
                </div>
                <div className="error mt-2">
                    {
                      formik.touched.address && formik.errors.address
                    }
                  </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                </div>
                <div className="error mt-2">
                    {
                      formik.touched.city && formik.errors.city
                    }
                  </div>
                <div className="flex-grow-1">
                  <select name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange("state")}
                  onBlur={formik.handleBlur("state")}  
                  className="form-control form-select" id="">
                    <option value="Select State" >
                      Select State
                    </option>
                    <option value="Sindh" >
                     Sindh
                    </option>
                  </select>
                  <div className="error mt-2">
                    {
                      formik.touched.state && formik.errors.state
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                <CustomInput
                    type="text"
                    name="pincode"
                    placeholder="ZipCode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                </div>
                <div className="error mt-2">
                    {
                      formik.touched.pincode && formik.errors.pincode
                    }
                  </div>
                <div className="w-100 mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                    <button className='button' type='submit'>Place Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4">
            <div className="border-bottom py-4">
              {
                carts && carts?.map((item,index)=>{
                  return (
                    <div key={index} className="d-flex gap-10 mb-2 align-align-items-center">
                    <div className="w-75 d-flex gap-10">
                      <div className="w-25 position-relative">
                        <span
                          style={{ top: "-10px", right: "-13px" }}
                          className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                        >
                          {item?.quantity}
                        </span>
                        <img width={100} height={100} src={item?.productId?.images[0]?.secure_url} alt="product" />
                      </div>
                      <div>
                        <h5 className="total-price">{item?.productId?.title}</h5>
                        <p className="total-price">{item?.color?.title}</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">Rs {item?.price * item?.quantity}</h5>
                    </div>
                  </div>
                  )
                })
              }
             
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">Rs {totalAmount ? totalAmount : "0"}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">Rs 5</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">Rs {totalAmount ? totalAmount + 5 : "0"}</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

