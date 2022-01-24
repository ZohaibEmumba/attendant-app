import { FC } from "react";
import { Form, Input, Select } from "antd";
import ModalWrapper from "../../common/Modal/Modal";
const { Option } = Select;

const AddEmployee: FC = () => {
  return (
    <div>
      <ModalWrapper>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Pin">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Select Role">
            <Select defaultValue="admin">
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Select Department">
            <Select defaultValue="rem">
              <Option value="rem">REM</Option>
              <Option value="mem">MEM</Option>
              <Option value="eme">EME</Option>
              <Option value="fam">FAM</Option>
            </Select>
          </Form.Item>
        </Form>
      </ModalWrapper>
    </div>
  );
};

export default AddEmployee;
