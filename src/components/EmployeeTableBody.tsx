import React, { memo } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import { EmployeeWithId } from '../store/types';

interface EmployeeTableBodyProps {
	employeeList: EmployeeWithId[],
	selectedRows: string[],
	onSelectRow: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

const useTableRowStyle = makeStyles(theme => ({
	root: {
		'&$selected, &$selected:hover': {
			backgroundColor: fade(theme.palette.primary.main, theme.palette.action.selectedOpacity),
		},
	},
	selected: {}
}));

const EmployeeTableBody: React.FC<EmployeeTableBodyProps> = ({ employeeList, selectedRows, onSelectRow }) => {
	const tableRowClasses = useTableRowStyle();
	return (
		<TableBody>
			{employeeList.map(({ name, dob, id }) => {
				const selected = selectedRows.includes(id);
				return (
					<TableRow
						key={id}
						selected={selected}
						classes={tableRowClasses}
						hover
					>
						<TableCell padding="checkbox">
							<Checkbox
								color="primary"
								id={id}
								checked={selected}
								onChange={onSelectRow}
							/>
						</TableCell>
						<TableCell>{name.first}</TableCell>
						<TableCell>{name.last}</TableCell>
						<TableCell align="right">{dob.age}</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	);
};

export default memo(EmployeeTableBody);
