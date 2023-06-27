import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";

export const contactPost = createAsyncThunk(
    "contact/post-bcontact",
    async(contactdata,thunkAPI)=>{
    try{
        return await contactService.postQuery(contactdata)
    }catch(e){
        return thunkAPI.rejectWithValue(e)
    }
})

const contactState = {
    contact: "",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const contactSlice = createSlice({
    name: "contact",
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(contactPost.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(contactPost.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.contact = action.payload
            if(state.isSuccess === true){
                toast.success("Message Sent")
            }
        })
        .addCase(contactPost.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
            if(state.isError === true){
                toast.error("Message not Sent")
            }
        })
    }
}) 

export default contactSlice.reducer