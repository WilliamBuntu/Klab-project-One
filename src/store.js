import { configureStore } from "@reduxjs/toolkit";
import holderReducer from "./features/newsholder/holderSlice";
import authReducer from './features/authSlice/authSlice';
import deleteReducer from './features/delete/deleteSlice'

export const store = configureStore({
  reducer: {
    holder: holderReducer,
    authorizer: authReducer,
    delete: deleteReducer
  },
});
