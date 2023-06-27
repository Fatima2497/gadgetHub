import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { myOrder } from "../features/user/userSlice";

const Order = () => {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state?.auth?.myorder);
  
  useEffect(() => {
    dispatch(myOrder());
  }, []);
  return (
    <>
      <BreadCrumb title="My Order" />
      <Container class1="cart-wrapper home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount After Discount </h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div  style={{background:  "#febd69" }} className="row my-3" key={index}>
                    <div className="col-3">
                      <p>{item?._id}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalAmount}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.totalAmountAfterDiscount}</p>
                    </div>
                    <div className="col-3">
                      <p>{item?.orderStatus}</p>
                    </div>
                    <div className="col-12">
                      <div style={{background:  "#232f3e" }} className="row  py-3">
                        <div className="col-3">
                          <h6 className="text-white">Product Name</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Quantity</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Price</h6>
                        </div>
                        <div className="col-3">
                          <h6 className="text-white">Color</h6>
                        </div>
                        {item?.orderItems?.map((items, index) => {
                          return (
                            <div className="col-12" key={index}>
                              <div className="row py-3">
                                <div className="col-3">
                                  <p className="text-white">{items?.product?.title}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{items?.quantity}</p>
                                </div>
                                <div className="col-3">
                                  <p className="text-white">{items?.price}</p>
                                </div>
                                <div className="col-3">
                                  <ul className="colors ps-0">
                                    <li
                                      style={{
                                        backgroundColor: items?.color?.title,
                                      }}
                                    ></li>
                                  </ul>
                                </div>
                                
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Order;
