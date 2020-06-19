import { createSelector } from 'reselect';
import { EmployeeWithId, AppState } from '../store/types';

export const employeeListSelector = (state: AppState): EmployeeWithId[] => state.employeeList;

export const selectedRowsSelector = (state: AppState): string[] => state.selectedRows;

export const pageSelector = (state: AppState): number => state.page;

export const rowsPerPageSelector = (state: AppState): number => state.rowsPerPage;

export const employeeListPerPageSelector = createSelector(
	[employeeListSelector, pageSelector, rowsPerPageSelector],
	(employeeList, page, rowsPerPage) => employeeList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
);

export const nameListSelector = createSelector(
	[employeeListSelector, selectedRowsSelector],
	(employeeList, selectedRows) => employeeList.reduce((names, { name, id }) => {
		return selectedRows.includes(id)
			? names.concat(name.first)
			: names;
	}, [] as string[])
);

export const employeeListLengthSelector = createSelector(
	employeeListSelector,
	(employeeList) => employeeList.length
);