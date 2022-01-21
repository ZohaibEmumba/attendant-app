import { FC, useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { ButtonWrapper } from "./style";
const { Option } = Select;

const AddEmployee:FC = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = (): any => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div>
      <ButtonWrapper>
        <Button type="primary" onClick={showModal}>
          ADD EMPLOYEE
        </Button>
      </ButtonWrapper>
      <Modal
        title="ADD EMPLOYEE"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
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
      </Modal>
    </div>
  );
};

export default AddEmployee;
