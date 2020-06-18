import { ActionTypes, Actions, AppState } from './types';

export const INITIAL_STATE: AppState = {
	employeeList: []
};

const appReducer = (state: AppState = INITIAL_STATE, action: Actions): AppState => {
	switch (action.type) {
		case ActionTypes.SET_EMPLOYEE_LIST: {
			return {
				...state,
				employeeList: action.data
			};
		}

		default:
			return state;
	}
};

export default appReducer;