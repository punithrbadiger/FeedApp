import {ADD_EMPLOYEE_DETAILS} from '../type';

export const addEmpDetails = (addEmpDetails) => (dispatch) => {
  dispatch({type: ADD_EMPLOYEE_DETAILS, payload: addEmpDetails});
};
