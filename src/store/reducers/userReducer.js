export const userReducer = (state =  {isLoggedIn: false, id: '', wallet: ''}, action) => {
    switch(action.type) {
        case 'userLogIn':
            return {
                ...state,
                isLoggedIn: true,
                id: action.payload.id,
                wallet: action.payload.wallet,
            };
            case 'userLogOut':
                return {
                ...state,
                isLoggedIn: false,
                id: '',
                wallet: '',
            };
            default:
                return {...state};
            }
        };