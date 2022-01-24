import { Button, Card, Avatar, Tooltip, Row, Col, Typography } from "antd";
import { Background, Section } from "./style";

const { Title } = Typography;

const PunchCard = () => {
  return (
    <Background>
      <Section>
        <Card
          title="Punch Card"
          bordered={true}
          hoverable={true}
          size="small"
          style={{ width: 400, height: 400 }}
        >
          <Avatar size={64} />
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div>
                <Title level={4}>Name :</Title>
              </div>
              <div>
                <Title level={4}>Email :</Title>
              </div>
              <div>
                <Title level={4}>Department :</Title>
              </div>
              <div>
                <Title level={4}>Role :</Title>
              </div>
              <div>
                <Title level={4}>Availabilty Status :</Title>
              </div>
            </Col>
          </Row>

          <div className="btn-clsss">
            <Tooltip title="Punch btn" placement="bottom">
              <Button type="primary">Punch In</Button>
            </Tooltip>
            {"  "}
            <Tooltip title="Apply leave" placement="bottom">
              <Button type="primary" >Record</Button>
            </Tooltip>
          </div>
        </Card>
      </Section>
    </Background>
  );
};

export default PunchCard;
