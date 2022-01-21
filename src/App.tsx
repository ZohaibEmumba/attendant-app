import { FC } from "react";
import './App.css';
import AdminDashBoard from "./components/AdminDashBoard/AdminDashBoard";
import Navbar from "./components/Navbar/Navbar";

const App:FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AdminDashBoard />
    </div>
  );
}

export default App;
