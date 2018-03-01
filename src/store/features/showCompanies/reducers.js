import types from './types';

const initialState = {
    companies: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_COMPANY: {
            return {
                ...state,
                companies: 'SOMETHING',
            };
        }
        default:
            return state;
    }
}