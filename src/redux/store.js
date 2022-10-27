import { configureStore } from "@reduxjs/toolkit";
import seraReducer from "./reducers/sera";

export default configureStore({
    reducer:{
        sera:seraReducer,
    },
})