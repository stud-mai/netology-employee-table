import { Employee } from '../store/types';

interface FetchError {
	error: Error | string
}

export interface GetEmployeeListResponse {
	results: Employee[],
	info: {
		seed: string,
		results: number,
		page: number,
		version: number
	}
}

export type PromisedResponse<T> = Promise<T | FetchError>

export type Response<T> = T | FetchError;

export const getEmployeeList = (): PromisedResponse<GetEmployeeListResponse> => {
	return fetch('https://randomuser.me/api/?results=100&inc=dob,name,gender,email,phone')
		.then(res => res.json())
		.catch((error: Error) => ({ error }));
};