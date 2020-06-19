import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Spinner from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const Progress: React.FC<{ open: boolean }> = ({ open }) => {
	const classes = useStyles();
	return (
		<Backdrop className={classes.backdrop} open={open}>
			<Spinner color="inherit"/>
		</Backdrop>
	);
};

export default Progress;
