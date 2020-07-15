import {ADD_EMPLOYEE_DETAILS} from '../type';

const INITIAL_STATE = {
  employees: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_DETAILS:
      let empId;
      if (Object.keys(state.employees).length === 0) {
        empId = 1;
      } else {
        empId = Math.max(Object.keys(state.employees)) + 1;
      }

      return {
        ...state,
        employees: {
          ...state.employees,
          [empId]: {empId: empId, ...action.payload},
        },
      };
    default:
      return state;
  }
};
