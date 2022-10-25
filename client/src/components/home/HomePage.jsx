import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Draw from "./draw/Draw";
import SideBar from "./SideBar";
import Center_sidebar from "./SideBars/center_sidebar";
import Left_side_bar from "./SideBars/left_side_bar";
import Wraper from "./Wraper";

const HomePage = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col sm={8} className="position-relative">
          <Tab.Container defaultActiveKey="Home" id="tab">
            <Row>
              <SideBar />
              <Wraper />
            </Row>
          </Tab.Container>
        </Col>
        <Col className="position-relative" sm={4}>
          <Draw />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
