import { ActionTypes, Actions, AppState } from './types';
import { minRowsPerPage } from '../constants';

export const INITIAL_STATE: AppState = {
	employeeList: [],
	selectedRows: [],
	rowsPerPage: minRowsPerPage,
	page: 0
};

const appReducer = (state: AppState = INITIAL_STATE, action: Actions): AppState => {
	switch (action.type) {
		case ActionTypes.SET_EMPLOYEE_LIST: {
			return {
				...state,
				employeeList: action.data.map(({ phone: id, ...rest }) => ({ ...rest, id }))
			};
		}

		case ActionTypes.SET_TABLE_PAGE:
			return {
				...state,
				page: action.page
			};

		case ActionTypes.SET_ROWS_PER_PAGE: {
			return {
				...state,
				page: 0,
				rowsPerPage: action.rowsPerPage
			};
		}

		case ActionTypes.SELECT_ROW: {
			if (action.checked) {
				return {
					...state,
					selectedRows: state.selectedRows.concat(action.id)
				};
			}
			return {
				...state,
				selectedRows: state.selectedRows.filter(id => id !== action.id)
			};
		}

		case ActionTypes.SELECT_ALL_ROWS: {
			if (action.checked) {
				return {
					...state,
					selectedRows: state.employeeList.map(({ id }) => id)
				};
			}
			return {
				...state,
				selectedRows: []
			};
		}

		default:
			return state;
	}
};

export default appReducer;