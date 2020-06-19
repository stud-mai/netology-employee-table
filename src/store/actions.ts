import { ActionTypes, Actions, Employee } from './types';

export const setEmployeeList = (data: Employee[]): Actions => ({
	type: ActionTypes.SET_EMPLOYEE_LIST,
	data
});

export const setTablePage = (page: number): Actions => ({
	type: ActionTypes.SET_TABLE_PAGE,
	page
});

export const setRowsPerPage = (rowsPerPage: number): Actions => ({
	type: ActionTypes.SET_ROWS_PER_PAGE,
	rowsPerPage
});

export const selectRow = (id: string, checked: boolean): Actions => ({
	type: ActionTypes.SELECT_ROW,
	id,
	checked
});

export const selectAllRows = (checked: boolean): Actions => ({
	type: ActionTypes.SELECT_ALL_ROWS,
	checked
});