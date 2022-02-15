import { Table } from "antd";
import { Section } from "./style";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddEmployee from "./AddEmployeeForm/AddEmployee";
import { FC } from "react";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "PIN",
    dataIndex: "pin",
    key: "pin",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <div style={{ display: "flex", gap: "10px" }}>
        <EditOutlined
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("You clicked Edit Button...");
          }}
        />
        <DeleteOutlined
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("You clicked Delete button...");
          }}
        />
      </div>
    ),
  },
];

const EmployeesList: FC = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      firstname: `Edward King ${i}`,
      lastname: ` King ${i}`,
      email: `mzohaibEmumba@gmail.com`,
      pin: `12${i}`,
      department: `London, Park Lane no. ${i}`,
      role: `Admin`,
    });
  }

  return (
    <Section>
      <AddEmployee />
      <Table 
       columns={columns}
       dataSource={data} 
       />
    </Section>
  );
};

export default EmployeesList;
