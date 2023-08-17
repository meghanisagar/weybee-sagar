const updateUserInfo = (data) => {
    return (dispatch) => {
        dispatch({
            type:'updateuserinfo',
            payload:data
        })
    }
}

export {updateUserInfo};