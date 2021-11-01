import { ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS } from "../constants/commentContant";


export const addComment = (comment) => {
    return async (dispatch) => {
        dispatch({ type: ADD_COMMENT_REQUEST});
        try {
            const status = "Send Infomation Success!";
            dispatch({ type: ADD_COMMENT_SUCCESS, payload: { comment, status}})
        } catch (error) {
            dispatch({
                type: ADD_COMMENT_FAILURE,
                payload: { error: error.response.comment },
            });
        }
    }
}