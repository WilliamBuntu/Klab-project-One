import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    deleted: false,
}

export const deleteSlice = createSlice({
    name: 'a',
    initialState,
    reducers:{
        deleted: (state) =>{
            state.deleted = true
        }
    }
})

export const Delete = (id) =>(dispatch) =>{
    console.log(id);
    axios({
        method: 'DELETE',
        url: `https://tresor.onrender.com/api/estates/delete/${id}`
    }).then((result)=>{
        console.log(result);
        window.location.reload();
        dispatch(deleted())
    }).catch((error)=>{
        console.log(error);
    })
}

export const {deleted} = deleteSlice.actions;
export default deleteSlice.reducer;