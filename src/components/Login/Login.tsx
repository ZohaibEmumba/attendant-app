import { Form, Input, Button } from "antd";
import { FC, useEffect, useState } from "react";
import { getData } from "../../utils/apiUtils";
import { Section, Wrapper } from "./style";

const Login: FC = () => {
  const [data, setData] = useState<any>();

  const getDataRecord = async () => {
    const response = await getData().then((data) => data);
    setData(response);
  };

  useEffect(() => {
    getDataRecord();
  }, []);

  return (
    <Wrapper>
      <Section>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{}}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Pin" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Section>
    </Wrapper>
  );
};

export default Login;
