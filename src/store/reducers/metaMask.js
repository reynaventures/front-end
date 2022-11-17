export const metamaskReducer = (state =  {metamaskNum: ''}, action) => {
    switch(action.type) {
        case 'metamaskDefault':
            return {
                ...state,
                metamaskNum: '',
            };
            case 'metamaskThere':
                return {
                ...state,
                metamaskNum: action.payload.name,
            };
            default:
                return {...state};
            }
        };