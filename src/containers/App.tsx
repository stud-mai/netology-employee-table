import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Progress from '../components/Progress';
import EmployeeTable from './EmployeeTable';
import * as selectors from '../selectors';
import * as actions from '../store/actions';
import * as API from '../API';
import { EmployeeWithId, AppState } from '../store/types';

const App: React.FC<unknown> = () => {
	const [fetching, setFetching] = useState<boolean>(true);
	const employeeListPerPage = useSelector<AppState, EmployeeWithId[]>(selectors.employeeListPerPageSelector);
	const nameList = useSelector<AppState, string[]>(selectors.nameListSelector);
	const selectedRows = useSelector<AppState, string[]>(selectors.selectedRowsSelector);
	const employeeListLength = useSelector<AppState, number>(selectors.employeeListLengthSelector);
	const page = useSelector<AppState, number>(selectors.pageSelector);
	const rowsPerPage = useSelector<AppState, number>(selectors.rowsPerPageSelector);

	const dispatch = useDispatch();
	const setTablePage = useCallback((page) => dispatch(actions.setTablePage(page)), [dispatch]);
	const setRowsPerPage = useCallback((rows) => dispatch(actions.setRowsPerPage(rows)), [dispatch]);
	const selectRow = useCallback((id, checked) => dispatch(actions.selectRow(id, checked)), [dispatch]);
	const selectAllRows = useCallback((checked) => dispatch(actions.selectAllRows(checked)), [dispatch]);

	useEffect(() => {
		(async () => {
			const response: API.Response<API.GetEmployeeListResponse> = await API.getEmployeeList();
			if ('error' in response){
				console.error('Error:', response.error);
			} else if ('results' in response) {
				dispatch(actions.setEmployeeList(response.results));
			}
			setFetching(false);
		})();
	}, []);

	return (
		<Container>
			<Typography variant="h4" align="center" gutterBottom>
				Список сотрудников
			</Typography>
			<EmployeeTable
				employeeListPerPage={employeeListPerPage}
				nameList={nameList}
				selectedRows={selectedRows}
				employeeListLength={employeeListLength}
				page={page}
				rowsPerPage={rowsPerPage}
				onChangePage={setTablePage}
				onChangeRowsPerPage={setRowsPerPage}
				onSelectRow={selectRow}
				onSelectAllRows={selectAllRows}
			/>
			<Progress open={fetching} />
		</Container>
	);
};

export default App;
