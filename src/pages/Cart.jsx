import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getuserCart,
  removeprodCart,
  updateprodfromCart,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [produpdate, setProdUpdate] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const cartState = useSelector((state) => state.auth.getacart);
  useEffect(() => {
    dispatch(getuserCart());
  }, []);

  useEffect(() => {
    if (produpdate !== null) {
      dispatch(
        updateprodfromCart({
          cartItemId: produpdate?.cartItemId,
          quantity: produpdate?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getuserCart());
      }, 200);
    }
  }, [produpdate]);
  const deleteCart = (id) => {
    dispatch(removeprodCart(id));
    setTimeout(() => {
      dispatch(getuserCart());
    }, 200);
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + Number(cartState[i].quantity) * cartState[i].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data py-3 d-flex justify-content-between align-items-center"
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center ">
                        <div className="w-25">
                          <img
                            src={item?.productId?.images[0]?.secure_url}
                            className="img-fluid"
                            alt="product-image"
                          />
                        </div>
                        <div className="w-75">
                          <h5>{item?.productId?.title}</h5>
                          <p>Size: dgg</p>
                          <p>
                            Color:{" "}
                            <ul className="colors ps-0">
                              <li
                                style={{ backgroundColor: item?.color?.title }}
                              ></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price">$ {item?.productId?.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex gap-15 align-items-center">
                        <div>
                          <input
                            type="number"
                            min={1}
                            max={10}
                            className="form-control"
                            id=""
                            value={
                              produpdate?.quantity
                                ? produpdate?.quantity
                                : item?.quantity
                            }
                            onChange={(e) => {
                              setProdUpdate({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => deleteCart(item?._id)}
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">
                          $ {item?.productId?.price} * {item?.quantity}{" "}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                {(totalAmount !== null || totalAmount !== 0) && (
                  <div className="d-flex flex-column justify-content-end">
                    <h4>SubTotal: $ {totalAmount}</h4>
                    <p>Taxes and shipping calulated at checkout</p>
                    <Link to="/checkout" className="button">
                      Check out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
