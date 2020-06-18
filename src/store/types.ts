enum Gender {
    M = 'male',
    F = 'female'
}

interface DOB {
    date: string,
    age: number
}

interface EmployeeName {
    title?: string,
    first: string,
    last: string
}

export interface Employee {
    dob: DOB
    gender: Gender
    name: EmployeeName
}

export enum ActionTypes {
    GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST',
    SET_EMPLOYEE_LIST = 'SET_EMPLOYEE_LIST',
}

interface GetEmployeeListAction {
    type: typeof ActionTypes.GET_EMPLOYEE_LIST
}

interface SetEmployeeListAction {
    type: typeof ActionTypes.SET_EMPLOYEE_LIST,
    data: Employee[]
}

export type Actions = GetEmployeeListAction | SetEmployeeListAction

export interface AppState {
    employeeList: Employee[]
}