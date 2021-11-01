import { ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS } from "../constants/commentContant";

const initialState = {
    data: [
        {
            id: "",
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    ],
    isLoading: false,
    error: null,
    status: null,

}
function commentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT_REQUEST: {
            return {...state, isLoading: true, error: null}
        }
        case ADD_COMMENT_SUCCESS: {
            const id = Math.floor(Math.random() * 100);
            return {...state, isLoading: false, data: action.payload.comment, status: action.payload.status, id: id}
        }
        case ADD_COMMENT_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
          return state;
    }
}
export default commentReducer;