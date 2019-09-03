const INIT_STATE = {
    isLoggedIn:false
};

export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'isLoggedIn':
            return { ...state, isLoggedIn: payload };
        default:
            return state;
    }
};