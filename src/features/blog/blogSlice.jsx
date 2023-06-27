import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";


export const allBlogs = createAsyncThunk(
    "blog/get-blogs",
    async(thunkAPI)=>{
    try{
        return await blogService.getBlogs()
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

export const getaBlog = createAsyncThunk(
    "blog/get-blog",
    async(id,thunkAPI)=>{
    try{
        return await blogService.getBlog(id)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})


const blogState = {
    blog: "",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const blogSlice = createSlice({
    name:"blog",
    initialState: blogState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(allBlogs.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(allBlogs.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.blogs = action.payload
        })
        .addCase(allBlogs.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
        .addCase(getaBlog.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getaBlog.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.singleblog = action.payload
        })
        .addCase(getaBlog.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
    }
})

export default blogSlice.reducer