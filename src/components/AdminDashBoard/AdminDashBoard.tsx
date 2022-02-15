import { Tabs } from "antd";
import { FC } from "react";
import EmployeesList from "../EmployeesList/EmployeesList";
import { Section } from "./style";

const { TabPane } = Tabs;

const AdminDashBoard: FC = () => {
  const callback = (key: any) => {
    console.log("");
  };

  return (
    <Section>
      <Tabs defaultActiveKey="1" onChange={callback} type="card">
        <TabPane tab="ALL EMPLOYEES" key="1">
          <EmployeesList />
        </TabPane>
        <TabPane tab="AVAILABLE EMPLOYEES" key="2">
          <EmployeesList />
        </TabPane>
        <TabPane tab="UNAVAILABLE EMPLOYEES" key="3">
          <EmployeesList />
        </TabPane>
        <TabPane tab="ON LEAVE EMPLOYEES" key="4">
          <EmployeesList />
        </TabPane>
      </Tabs>
    </Section>
  );
};

export default AdminDashBoard;
