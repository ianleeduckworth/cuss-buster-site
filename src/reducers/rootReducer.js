import reduxActions from '../staticData/reduxActions'

const initState = {
    accountInfo: undefined
}

const rootReducer = (state = initState, action) => {
    if (action.type === reduxActions.ADD_ACCOUNT_INFO) {
        state.accountInfo = action.accountInfo;
    }

    if (action.type === reduxActions.DELETE_ACCOUNT_INFO) {
        state.accountInfo = null;
    }

    return state;
}

export default rootReducer;