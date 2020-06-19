import React, { memo } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

interface EmployeeTableHeaderProps {
	selectedRowsLength: number,
	employeeListLength: number,
	onSelectAllRows: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

const EmployeeTableHeader: React.FC<EmployeeTableHeaderProps> = ({
	selectedRowsLength, employeeListLength, onSelectAllRows
}) => {
	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={selectedRowsLength > 0 && selectedRowsLength < employeeListLength}
						checked={selectedRowsLength === employeeListLength}
						onChange={onSelectAllRows}
					/>
				</TableCell>
				<TableCell>Имя</TableCell>
				<TableCell>Фамилия</TableCell>
				<TableCell align="right">Возраст</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default memo(EmployeeTableHeader);
