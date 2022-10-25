import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import { MENU } from './const';

const Wraper = () => {
  return (
    <Col xl={9} className="side-height rounded-3 overflow-hidden shadow ">
      <Tab.Content>
        {MENU.map((item) => {
          return (
            <Tab.Pane key={item.id} eventKey={item.name}>
              {item.component}
            </Tab.Pane>
          );
        })}
      </Tab.Content>
    </Col>
  );
};

export default Wraper;
