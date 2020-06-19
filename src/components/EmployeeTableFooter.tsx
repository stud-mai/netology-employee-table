import React, { memo } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { minRowsPerPage } from '../constants';

interface EmployeeTableFooterProps {
	rowsPerPage: number,
	page: number,
	employeeListLength: number,
	nameList: string[],
	onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void,
	onChangeRowsPerPage: (event: React.ChangeEvent<{ value: string }>) => void
}

const EmployeeTableFooter: React.FC<EmployeeTableFooterProps> = ({
	rowsPerPage, page, employeeListLength, nameList, onChangePage, onChangeRowsPerPage
}) => {
	return (
		<TableFooter>
			<TableRow>
				<TablePagination
					rowsPerPageOptions={[minRowsPerPage, 50, 100]}
					count={employeeListLength}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={onChangePage}
					onChangeRowsPerPage={onChangeRowsPerPage}
					labelRowsPerPage="Строк на странице:"
				/>
			</TableRow>
			<TableRow>
				<TableCell component="th" >
					Пользователи:
				</TableCell>
				<TableCell colSpan={3}>
					{nameList.join(', ')}
				</TableCell>
			</TableRow>
		</TableFooter>
	);
};

export default memo(EmployeeTableFooter);
