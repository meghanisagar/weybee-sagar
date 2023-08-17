const reducer = (state = {}, action) => {
    if (action.type === 'updateuserinfo') {
        return  action.payload;        
    }
   else {
        return state;
    }
};

export default reducer;