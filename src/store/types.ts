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
    name: EmployeeName,
    email: string,
    phone: string
}

export enum ActionTypes {
    GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST',
    SET_EMPLOYEE_LIST = 'SET_EMPLOYEE_LIST',
    SET_TABLE_PAGE = 'SET_TABLE_PAGE',
    SET_ROWS_PER_PAGE = 'SET_ROWS_PER_PAGE',
    SELECT_ROW = 'SELECT_ROW',
    SELECT_ALL_ROWS = 'SELECT_ALL_ROWS'
}

interface GetEmployeeListAction {
    type: typeof ActionTypes.GET_EMPLOYEE_LIST
}

interface SetEmployeeListAction {
    type: typeof ActionTypes.SET_EMPLOYEE_LIST,
    data: Employee[]
}

interface SetTablePageAction {
    type: typeof ActionTypes.SET_TABLE_PAGE,
    page: number
}

interface SetRowsPerPageAction {
    type: typeof ActionTypes.SET_ROWS_PER_PAGE,
    rowsPerPage: number
}

interface SelectRowAction {
    type: typeof ActionTypes.SELECT_ROW,
    id: string,
    checked: boolean
}

interface SelectAllRowsAction {
    type: typeof ActionTypes.SELECT_ALL_ROWS,
    checked: boolean
}

export type Actions =
    | GetEmployeeListAction
    | SetEmployeeListAction
    | SetTablePageAction
    | SetRowsPerPageAction
    | SelectRowAction
    | SelectAllRowsAction

export interface EmployeeWithId extends Omit<Employee, 'phone'> {
    id: string
}

export interface AppState {
    employeeList: EmployeeWithId[],
    selectedRows: string[],
    rowsPerPage: number,
    page: number
}