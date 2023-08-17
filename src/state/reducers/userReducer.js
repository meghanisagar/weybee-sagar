const reducer = (state, action) => {
    if (action.type == 'updateuserinfo') {
        return {
            state: action.payload
        }
    }
    else {
        return { state }
    }
};

export default reducer;