import { FC, useState } from "react";
import { Button, Col, Input, Modal, Tooltip } from "antd";
import { ButtonWrapper } from "./style";

const ModalWrapper: FC = (props) => {
  const { children } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

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
    <>
      <ButtonWrapper>
        <Col lg={6}>
          <Tooltip title="Search Employee" placement="bottom">
            <Input placeholder="Search Employee" />
          </Tooltip>
        </Col>
        <Tooltip title="Add Employee" placement="bottom">
          <Button type="primary" onClick={showModal}>
            ADD EMPLOYEE
          </Button>
        </Tooltip>
      </ButtonWrapper>
      <Modal
        title="ADD EMPLOYEE"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWrapper;
