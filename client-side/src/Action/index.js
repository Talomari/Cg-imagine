

export const setUser = (user) => {
    return {
        type: 'USER',
        payload: user
    };
};

export const isLoggedIn = (bool) => {
    return {
        type: 'isLoggedIn',
        payload: bool
    };
}

