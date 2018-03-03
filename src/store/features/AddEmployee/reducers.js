import types from './types';

const dummyEmployees = [
    {
        name: 'Cool Guy 1',
        phone: '12345',
        email: 'hi@ol.com',
    },
    {
        name: 'Cool Guy 2',
        phone: '6789',
        email: 'hello@gmail.biz',
    }
];


const initialState = {
    employees: dummyEmployees,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_EMPLOYEE:
        {
            console.log('I AM A CASE');
            const newEmployees = [...state];
            newEmployees.push(action.employee);

            return {
                ...state,
                employees: newEmployees,
            };
        }
        default:
            return state;
    }
}