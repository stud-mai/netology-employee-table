import { ActionTypes, Actions, Employee } from './types';

export const setEmployeeList = (data: Employee[]): Actions => ({
	type: ActionTypes.SET_EMPLOYEE_LIST,
	data
});