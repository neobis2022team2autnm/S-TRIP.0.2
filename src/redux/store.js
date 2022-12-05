import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import dashbordSlice from "./reducers/placeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    place: dashbordSlice,
  },
});

