import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import cross from "../images/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserWishlist } from "../features/user/userSlice";
import { addWishlist } from "../features/product/productSlice";
import Container from "../components/Container";

const Wishlist = () => {
  const disptach = useDispatch()

  useEffect(()=>{
    getWish()
  },[])

  const getWish = () => {
    disptach(getUserWishlist())
  }

  const wishlistState = useSelector((state)=> state?.auth?.userwishlist?.wishlist)

  const removefromWish = (id) => {
    disptach(addWishlist(id))
    setTimeout(()=>{
      disptach(getUserWishlist())
    },300)
  }

  return (
    <>
      <Meta title={"WishList"} />
      <BreadCrumb title="WishList" />
      <Container class1="wishlist-wrapper py-5 home-wrapper-2">
      <div className="row">
            {wishlistState?.length === 0 && <div className="bg-white text-center p-3 fs-3"> No Favourite Product</div>}
            { wishlistState &&
              wishlistState?.map((item, index)=>{
                return(
                  <div className="col-3 p-3 bg-white ms-3" key={index} >
                  <div className="wishlist-card position-relative">
                    <img
                      onClick={(e)=>{removefromWish(item._id)}}
                      src={cross}
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={item?.images[0]?.secure_url ? item?.images[0]?.secure_url : watch}
                        alt="compare-product"
                        className="img-fluid d-block mx-auto"
                        width={160}
                      />
                    </div>
                   <div className="py-3">
                   <h5 className="title fw-bold">{item.title}</h5>
                    <h6 className="price">$ {item.price}</h6>
                   </div>
                  </div>
                </div>
                )
              })
            }
          </div>
      </Container>
    
    </>
  );
};

export default Wishlist;
