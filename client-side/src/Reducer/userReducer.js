const INIT_STATE = {
    user: {}
};
export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'USER':
            return { ...state, user: payload };
        default:
            return state;
    }
};