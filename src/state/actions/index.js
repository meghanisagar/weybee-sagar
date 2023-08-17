const updateUserInfo = (data) => {
    return dispatch({
        type: 'updateuserinfo',
        payload: data
    })
}

export {updateUserInfo};