import React from "react";
import mainBanner from "../images/main-banner-1.jpg";
import pic1 from "../images/catbanner-01.jpg";
import pic2 from "../images/catbanner-02.jpg";
import pic3 from "../images/catbanner-03.jpg";
import pic4 from "../images/catbanner-04.jpg";
import camera from "../images/camera.jpg";
import TV from "../images/tv.jpg";
import accessories from "../images/acc.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import laptop from "../images/laptop.jpg";
import speaker from "../images/speaker.jpg";
import headphone from "../images/headphone.jpg";
import famous1 from "../images/famous-1.webp";
import famous2 from "../images/famous-2.webp";
import famous3 from "../images/famous-3.webp";
import famous4 from "../images/famous-4.webp";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import Img from "../utils/Img";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allBlogs } from "../features/blog/blogSlice";
import moment from "moment/moment";
import { getAllProduct } from "../features/product/productSlice";
import { addWishlist } from "../features/product/productSlice";
import wish from "../images/wish.svg";
import watch1 from "../images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import cart from "../images/add-cart.svg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blogs);
  const prodState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const addWish = (id) => {

    dispatch(addWishlist(id))
  }
  console.log(prodState);
  useEffect(() => {
    getBlog();
    getProducts();
  }, []);

  const getBlog = () => {
    dispatch(allBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProduct());
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src={mainBanner}
                className="img-fluid rounded-4"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src={pic1}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale.</h4>
                  <h5>Laptop Max</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo..
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={pic3}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599 or <br /> $49.91/mo..
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={pic2}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>16% OFF.</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band <br /> styles and colors.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={pic4}
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING.</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    High-fidelity playback & <br /> ultra-low distortion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-around">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-senter">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Computer & Laptops</h6>
                  <p>8 Items</p>
                </div>
                <img src={laptop} alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Televisions</h6>
                  <p>12 Items</p>
                </div>
                <img src={TV} alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>13 Items</p>
                </div>
                <img src={headphone} alt="" />
              </div>
              {/* <div className='d-flex  align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>4 Items</p>
                </div>
                <img src={camera} alt="" />
              </div> */}
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>5 Items</p>
                </div>
                <img src={camera} alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>6 Items</p>
                </div>
                <img src={headphone} alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src={accessories} alt="" />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Portable Speaker</h6>
                  <p>10 Items</p>
                </div>
                <img src={speaker} alt="" />
              </div>
              {/* <div className='d-flex  align-items-center'>
                <div>
                  <h6>Home Appliances</h6>
                  <p>6 Items</p>
                </div>
                <img src={homeapp} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center">Featured Collection</h3>
          </div>
          <div className="row">
          {prodState &&
            prodState?.map((item, index) => {
              if(item?.tags == "featured"){
                return <div key={index} className="col-3">
                  <div className="product-card position-relative text-dark">
                <div className="wishlist-icon position-absolute">
                  <button className="border-0 bg-tansparent" onClick={(e)=>{addWish(item?._id)}}>
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
                    <button className="border-0 bg-tansparent">
                      <img onClick={()=>navigate('/product/'+item?._id)} src={view} alt="" />
                    </button>
                  </div>
                </div>
              </div>
                </div>
              }
              
            })}
        </div>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous1} className="img-fluid" alt="famous product" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} className="img-fluid" alt="famous product" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} className="img-fluid" alt="famous product" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HOMESPEAKER</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">From $699 or $116.58/mo.for 12 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous4} className="img-fluid" alt="famous product" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">From $399 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {prodState &&
            prodState?.map((item, index) => {
              if (item?.tags == "special") {
                return <SpecialProduct
                 key={index} 
                 id={item?._id}
                 title={item?.title}
                 brand={item?.brand}
                 rating={item?.totalrating}
                 price={item?.price}
                 sold={item?.sold}
                 quantity={item?.quantity}
                 img={item?.images[0]?.secure_url}
                 />;
              }
            })}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center">
              Our Popular Products
            </h3>
          </div>
        </div>
        <div className="row">
          {prodState &&
            prodState?.map((item, index) => {
              if(item?.tags == "popular"){
                return <div key={index} className="col-3">
                  <div className="product-card position-relative text-dark">
                <div className="wishlist-icon position-absolute">
                  <button className="border-0 bg-tansparent" onClick={(e)=>{addWish(item?._id)}}>
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
                    <button className="border-0 bg-tansparent">
                      <img src={view} alt=""  onClick={()=>navigate('/product/'+item?._id)} />
                    </button>
                    {/* <Link><img src={second} alt="" /></Link> */}
                  </div>
                </div>
              </div>
                </div>
              }
              
            })}
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-center">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 2) {
                return (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                      description={item?.description}
                      image={item?.images[0]?.secure_url}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
