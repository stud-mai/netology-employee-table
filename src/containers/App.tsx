import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setEmployeeList } from '../store/actions';
import * as API from '../API';

const App: React.FC<unknown> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const response: API.Response<API.GetEmployeeListResponse> = await API.getEmployeeList();
			if ('error' in response){
				console.error('Error:', response.error);
			} else if ('results' in response) {
				dispatch(setEmployeeList(response.results));
			}
		})();
	}, []);

	return (
		<div>
			Netology Employee Table
		</div>
	);
};

export default App;
