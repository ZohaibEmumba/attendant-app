import { createContext } from "react";
import { GET_EMPLOYEES, LOGIN, LOGOUT, SET_EMPLOYEE } from "../constants";
import { EmployeeReducer, Action, Dispatch } from '../types/index'

export const initialState: EmployeeReducer = {
    employees: [],
    user: {},
    isLoading: false,
};

export const EmployeeContext = createContext<{
    state: EmployeeReducer,
    dispatch: Dispatch,
}>({
    state: initialState,
    dispatch: () => undefined
});

export const Reducer = (state = initialState, action: Action): EmployeeReducer => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return { ...state, employees: action.payload };
        case SET_EMPLOYEE:
            return { ...state, employees: action.payload };
        case LOGIN:
            return { ...state, user: action.payload };
        case LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};