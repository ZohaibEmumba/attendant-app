import { FC, useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Reducer,
  initialState,
  EmployeeContext,
} from "./context/EmployeeContext";

const App: FC = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
    return (
    <div className="App">
      <EmployeeContext.Provider value={{ state, dispatch }}>
      </EmployeeContext.Provider>
    </div>
  );
};

export default App;
