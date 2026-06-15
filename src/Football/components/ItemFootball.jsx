import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const ItemFootball = ({ football }) => {
  return (
    <>
      {football.map((item) => {
        const timestamp = item.event_timestamp;
        const date = new Date(timestamp * 1000);
        const formattedDate = date.toLocaleString("vi-VN", {
          dateStyle: "full",
          timeStyle: "short",
        });
        return (
          <Row
            style={{
              border: "thin solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <Col span={20} offset={2}>
              <Row>
                <Col span={24}>
                  <h2 style={{ textAlign: "center" }}>{formattedDate}</h2>
                  <p style={{ textAlign: "center" }}>{item.status}</p>
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Title level={3}>{item.home_team.team_name}</Title>
                  <img src={item.home_team.logo} width={150} height={150} />
                </Col>
                <Col span={4}>
                  <Title level={4}> {item.score.fulltime}</Title>
                </Col>
                <Col span={10}>
                  <Title level={3}>{item.away_team.team_name}</Title>
                  <img src={item.away_team.logo} width={150} height={150} />
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};
export default ItemFootball;
