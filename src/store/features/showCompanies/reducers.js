import types from './types';

const initialState = {
    string: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_COMPANY: {
            const newString = 'A NEW STRING!!!';
            return {
                ...state,
                string: newString,
            };
        }
        default:
            return state;
    }
}