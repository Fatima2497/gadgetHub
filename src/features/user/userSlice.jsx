import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "./userService";
import { toast } from "react-toastify";

const getData = localStorage.getItem("customer") ? localStorage.getItem("customer") : null
export const registerUser = createAsyncThunk(
    "auth/register",
    async(userData,thunkAPI)=>{
    try{
        return await userService.register(userData)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const loginUser = createAsyncThunk(
    "auth/login",
    async(userData,thunkAPI)=>{
    try{
        return await userService.login(userData)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const getUserWishlist = createAsyncThunk(
    "auth/get-wishlist",
    async(thunkAPI)=>{
    try{
        return await userService.getWishlist()
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const addtoCart = createAsyncThunk(
    "auth/post-cart",
    async(cartData,thunkAPI)=>{
    try{
        return await userService.addCart(cartData)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const getuserCart = createAsyncThunk(
    "auth/get-cart",
    async(thunkAPI)=>{
    try{
        return await userService.getCart()
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const removeprodCart = createAsyncThunk(
    "auth/delete-cart",
    async(cartitemId,thunkAPI)=>{
    try{
        return await userService.removeProdfromCart(cartitemId)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const updateprodfromCart = createAsyncThunk(
    "auth/update-cart",
    async(cartDetail,thunkAPI)=>{
    try{
        return await userService.upadteProdCart(cartDetail)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const userOrder = createAsyncThunk(
    "auth/post-order",
    async(orderDetail,thunkAPI)=>{
    try{
        return await userService.createOrder(orderDetail)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const myOrder = createAsyncThunk(
    "auth/get-order",
    async(thunkAPI)=>{
    try{
        return await userService.getOrder()
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const updateUser = createAsyncThunk(
    "auth/update-user",
    async(data,thunkAPI)=>{
    try{
        return await userService.myProfile(data)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const getaUser = createAsyncThunk(
    "auth/get-user",
    async(id,thunkAPI)=>{
    try{
        return await userService.myProfile(id)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const forgetPassToken = createAsyncThunk(
    "auth/post-pass",
    async(data,thunkAPI)=>{
    try{
        return await userService.forgetPass(data)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const resetPassToken = createAsyncThunk(
    "auth/put-resetpass",
    async(data,thunkAPI)=>{
    try{
        return await userService.resetPass(data)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

const initialState = {
    user: getData,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(registerUser.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.createduser = action.payload
            if(state.isSuccess === true){
                toast.info('User Created Successful')
            }
        })
        .addCase(registerUser.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
            if(state.isError === true){
                toast.error(action.error)
            }
        })
        .addCase(loginUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if(state.isSuccess === true){
                toast.info('User Login Successful')
            }
        })
        .addCase(loginUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("Invalid Credentials")
            }
        })
        .addCase(getUserWishlist.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(getUserWishlist.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.userwishlist = action.payload;
        })
        .addCase(getUserWishlist.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
           
        })
        .addCase(addtoCart.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(addtoCart.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.usercart = action.payload;
            if(state.isSuccess === true){
                toast.success("Your Item is added to cart")
            }
        })
        .addCase(addtoCart.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Item Added to Cart! Server Error")
            }
        })
        .addCase(getuserCart.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(getuserCart.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.getacart = action.payload;
        })
        .addCase(getuserCart.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(removeprodCart.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(removeprodCart.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.deleteacart = action.payload;
            if(state.isSuccess === true){
                toast.success("Your Item is deleted from cart")
            }
        })
        .addCase(removeprodCart.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Item Deleted to Cart! Server Error")
            }
        })
        .addCase(updateprodfromCart.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(updateprodfromCart.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updateacart = action.payload;
            if(state.isSuccess === true){
                toast.success("Your Item is updated from cart")
            }
        })
        .addCase(updateprodfromCart.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Item updated to Cart! Server Error")
            }
        })
        .addCase(userOrder.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(userOrder.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.order = action.payload;
            if(state.isSuccess === true){
                toast.success("Your Order is placed")
            }
        })
        .addCase(userOrder.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Order is placed")
            }
        })
        .addCase(myOrder.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(myOrder.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.myorder = action.payload;
        })
        .addCase(myOrder.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(updateUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.profile = action.payload;
            if(state.isSuccess === true){
                toast.success("Your Profile is updated")
            }
        })
        .addCase(updateUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Profile is updated")
            }
        })
        .addCase(getaUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(getaUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.getprofile = action.payload;
        })
        .addCase(getaUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(forgetPassToken.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(forgetPassToken.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.gettoken = action.payload;
            if(state.isSuccess === true){
                toast.success("Email Sent Successful")
            }
        })
        .addCase(forgetPassToken.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Email Sent")
            }
        })
        .addCase(resetPassToken.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(resetPassToken.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.setpass = action.payload;
            if(state.isSuccess === true){
                toast.success("Password Reset Successful")
            }
        })
        .addCase(resetPassToken.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("No Password Reset")
            }
        })

    }
})

export default authSlice.reducer