import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "../Slices/ContactSlices";

export const store = configureStore({
  reducer: {
    contact: ContactSlice.reducer
  },
});
