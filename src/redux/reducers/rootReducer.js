// Reducer tổng quản lý tất cả các reducer con

import { combineReducers} from "redux"
// Import các reducer con
import commentReducer from "./commentReducer,"
const rootReducer = combineReducers({
    // đây là nơi khai báo các reducer con
    comment: commentReducer,
});

export default rootReducer;