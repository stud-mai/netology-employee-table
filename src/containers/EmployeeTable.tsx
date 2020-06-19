import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import EmployeeTableHeader from '../components/EmployeeTableHeader';
import EmployeeTableBody from '../components/EmployeeTableBody';
import EmployeeTableFooter from '../components/EmployeeTableFooter';
import { EmployeeWithId } from '../store/types';

interface EmployeeTableProps {
	employeeListPerPage: EmployeeWithId[],
	nameList: string[],
	employeeListLength: number,
	selectedRows: string[],
	page: number,
	rowsPerPage: number,

	onChangePage: (page: number) => void,
	onChangeRowsPerPage: (rowsPerPage: number) => void,
	onSelectRow: (id: string, checked: boolean) => void,
	onSelectAllRows: (checked: boolean) => void,
}

const EmployeeTable: React.FC<EmployeeTableProps> = (props) => {
	const {
		employeeListPerPage, nameList, employeeListLength, selectedRows, page, rowsPerPage,
		onChangePage, onChangeRowsPerPage, onSelectRow, onSelectAllRows
	} = props;
	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
		onChangePage(page);
	};
	const handleChangeRowsPerPage = (event: React.ChangeEvent<{ value: string }>) => {
		onChangeRowsPerPage(Number(event.target.value));
	};
	const selectRowHandler = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
		onSelectRow(event.target.id, checked);
	};
	const selectAllRowsHandler = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
		onSelectAllRows(checked);
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table>
					<EmployeeTableHeader
						selectedRowsLength={selectedRows.length}
						employeeListLength={employeeListLength}
						onSelectAllRows={selectAllRowsHandler}
					/>
					<EmployeeTableBody
						employeeList={employeeListPerPage}
						selectedRows={selectedRows}
						onSelectRow={selectRowHandler}
					/>
					<EmployeeTableFooter
						page={page}
						rowsPerPage={rowsPerPage}
						employeeListLength={employeeListLength}
						nameList={nameList}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
					/>
				</Table>
			</TableContainer>
		</div>
	);
};

export default EmployeeTable;
