import React from "react";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import cart from "../images/add-cart.svg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import wish from "../images/wish.svg";
import { useDispatch } from "react-redux";
import { addWishlist } from "../features/product/productSlice";

const ProductCard = (props) => {
  const { grids, data } = props;
  const dispatch = useDispatch()

  let location = useLocation();
  const addWish = (id) => {

    dispatch(addWishlist(id))
  }

  return (
    <>
      {
        
        data?.map((item,index)=>{
          return(
            <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grids}` : "col-3"
            }`}
          >
            <div className="product-card position-relative text-dark">
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-tansparent" onClick={(e)=>{addWish(item?._id)}} >
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img src={item?.images[0]?.secure_url} className="img-fluid mx-auto" 
                width={160} alt="product-img" />
                <img src={watch1} className="img-fluid mx-auto" 
                width={160} alt="product-img" />
              </div>
              <div className="product-detail">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">
                  {item?.title}
                </h5>
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={24} 
                  value={Number(item?.totalrating)}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grids === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{__html: item?.description}}
                >
                </p>
                <p className="price">$ {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-tansparent">
                    <img src={cart} alt="cart" />
                  </button>
                  {/* <button className="border-0 bg-tansparent">
                    <img src={compare} alt="compare" />
                  </button> */}
                  <Link to={'/product/'+item?._id} className="border-0 bg-tansparent">
                    <img src={view} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }  
    </>
  );
};

export default ProductCard;
