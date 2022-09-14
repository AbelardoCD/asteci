import { useEffect } from "react";
import Rectangulo from "../components/rectangulo/Rectangulo";
import Table from "../components/table/Table";
import UserForm from "../components/userForm/UserForm";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <UserForm />

        <Rectangulo />

        <Table />
      </div>
    </>
  );
};

export default Dashboard;
