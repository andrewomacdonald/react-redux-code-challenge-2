import types from './types';

function addEmployee(employee) {
    return {
        type: types.ADD_EMPLOYEE,
        employee,
    };
}

export default {
    addEmployee,
};