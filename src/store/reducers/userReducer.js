export const userReducer = (state =  {isLoggedIn: false, id: ''}, action) => {
    switch(action.type) {
        case 'userLogIn':
            return {
                ...state,
                isLoggedIn: true,
                id: action.payload.id
            };
            case 'userLogOut':
                return {
                ...state,
                isLoggedIn: false,
                id: '',
            };
            default:
                return {...state};
            }
        };