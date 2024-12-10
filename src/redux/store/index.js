import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer.js";

const bigReducer = combineReducers({
    favourites: favouritesReducer

})


const store = configureStore({
    reducer: bigReducer,
})
export default store