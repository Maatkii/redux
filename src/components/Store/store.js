import { createStore } from "redux";
import { TaskReducer } from "../Reducers/TaskReducer";
export const store = createStore(TaskReducer);
