import React,{ FC, useReducer } from "react";
import "./App.css";
import {
  Reducer,
  initialState,
  EmployeeContext,
} from "./context/EmployeeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";

const App: FC = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
    return (
    <div className="App">
      <EmployeeContext.Provider value={{ state, dispatch }}>
        {/* <Router>
           <Routes>
             <Route path="/" element={<Login /> } />
           </Routes>
        </Router> */}
        <Navbar />
        <AdminDashBoard />
      </EmployeeContext.Provider>
    </div>
  );
};

export default App;
