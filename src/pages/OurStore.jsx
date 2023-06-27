import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import headphone from "../images/headphone.jpg";
import camera from "../images/camera.jpg";
import line from "../images/gr.svg";
import grid2 from "../images/gr2.svg";
import grid3 from "../images/gr3.svg";
import grid4 from "../images/gr4.svg";
import ProductCard from '../components/ProductCard'
import Color from "../components/Color";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";
import Container from '../components/Container'

const OurStore = () => {
  const [grids, setGrids] = useState(4);
  const [brand,setBrand] = useState([])
  const [categories,setCategories] = useState([])
  const [tag,setTag] = useState([])

  
  //Filter Tags
  const [tags,setTags] = useState(null)
  const [category,setCategory] = useState(null)
  const [brands,setBrands] = useState(null)
  const [minPrice,setMinPrice] = useState(null)
  const [maxPrice,setMaxPrice] = useState(null)
  const [sort,setSort] = useState(null)
  
  const dispatch = useDispatch()

  const prodState = useSelector((state)=> state?.product?.product)
  
  useEffect(()=>{
   getProd()

  },[sort,brands,category,minPrice,maxPrice,tags])

  const getProd = () => {
    dispatch(getAllProduct({sort,brands,category,minPrice,maxPrice,tags}))
  }

  useEffect(()=>{
    let newBrand = []
    let category = []
    let newTag =  []
    for (let index = 0; index < prodState?.length; index++) {
      const element = prodState[index];
      newBrand?.push(element?.brand)
      category?.push(element?.category)
      newTag?.push(element?.tags)
      
    }
    setBrand(newBrand)
    setCategories(category)
    setTag(newTag)
  
  },[prodState])
 
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store " />
      <Container class1="store-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3 ms-5">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                 
                  {
                    categories && [... new Set(categories)].map((item,index)=>{
                      return (
                        <li key={index} onClick={()=>setCategory(item)}>{item}</li>
                      )
                    }) 
                  }
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By </h3>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-itens-center gap-10">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                        onChange={(e)=>setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From </label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="To"
                        onChange={(e)=>setMaxPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>    
                </div>
                <div className=" mt-3">
                <h3 className="sub-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                    tag && [... new Set(tag)].map((item,index)=>{
                      return (
                        <span 
                        key={index}
                        onClick={()=>setTags(item)}
                        className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3">
                     {item}
                    </span>
                      )
                    }) 
                  }
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="sub-title">Product Brands</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                    brand && [... new Set(brand)].map((item,index)=>{
                      return (
                        <span 
                        key={index}
                        onClick={()=>setBrands(item)}
                        className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3">
                     {item}
                    </span>
                      )
                    }) 
                  }
                  </div>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-8">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select
                      name=""
                      id=""
                      className="form-control form-select"
                      defaultValue={"manula"}
                      onChange={(e)=>setSort(e.target.value)}
                    >
                      <option value="manual">Featured</option>
                      <option value="title">
                        Alphabetically, A-Z
                      </option>
                      <option value="-title">
                        Alphabetically, Z-A
                      </option>
                      <option value="price">
                        Price, low to high
                      </option>
                      <option value="-price">
                        Price, high to low
                      </option>
                      <option value="createdAt">
                        Date, old to new
                      </option>
                      <option value="-createdAt">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid ">
                      <img
                        onClick={() => setGrids(3)}
                        src={grid4}
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => setGrids(4)}
                        src={grid3}
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => setGrids(6)}
                        src={grid2}
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => setGrids(12)}
                        src={line}
                        alt="grid"
                        className="d-block img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                <ProductCard data={prodState ? prodState : []} grids={grids}/>
                </div>
              </div>
            </div>
          </div>
       
      </Container>
    </>
  );
};

export default OurStore;
