export type EmployeeType = {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    department?: string;
    role?: string;
    pin?: string;
    available?: boolean;
    leave?: boolean;
  };

export type EmployeeReducer = {
    employees: Array<EmployeeType>;
    user: {} | null;
    isLoading: boolean;
  };

export type Action = { type: string; payload: Array<EmployeeType> };

export type Dispatch = React.Dispatch<Action>;
