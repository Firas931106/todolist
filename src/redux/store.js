import { taskReducer } from "./Reducer";
import { createStore } from "redux"

const store = createStore(taskReducer);
export default store;