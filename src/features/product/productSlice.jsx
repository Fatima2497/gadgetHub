import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";

export const getAllProduct = createAsyncThunk(
    "product/get-products",
    async(data,thunkAPI)=>{
    try{
        return await productService.getProducts(data)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const getProduct = createAsyncThunk(
    "product/get-product",
    async(id,thunkAPI)=>{
    try{
        return await productService.getSingleProduct(id)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})


export const addWishlist = createAsyncThunk(
    "product/put-wishlist",
    async(prodId,thunkAPI)=>{
    try{
        return await productService.addToWishList(prodId)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const rateProd = createAsyncThunk(
    "product/put-rating",
    async(prodData,thunkAPI)=>{
    try{
        return await productService.addRateProd(prodData)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

const productState = {
    product: "",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const productSlice = createSlice({
    name:"product",
    initialState: productState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(getAllProduct.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getAllProduct.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.product = action.payload
        })
        .addCase(getAllProduct.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
        .addCase(getProduct.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getProduct.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.singleproduct = action.payload
            state.message = "Product Add wishlist"
        })
        .addCase(getProduct.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
        .addCase(addWishlist.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(addWishlist.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.addwishlist = action.payload
            state.message = "Product Add wishlist"
        })
        .addCase(addWishlist.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
        .addCase(rateProd.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(rateProd.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.rating = action.payload
            state.message = "Product Rating Added"
            if(state.isSuccess){
                toast.success("Rating Added Successful")
            }
        })
        .addCase(rateProd.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
            if(state.isError){
                toast.error("No! Rating Added")
            }
        })
    }
})

export default productSlice.reducer