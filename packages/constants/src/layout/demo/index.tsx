import React from "react";
import { Row, Col } from "antd";
import { SPAN_4, SPAN_8, SPAN_12 } from "tocfe-constants";
import styles from "./index.less";

const index = () => {
  return (
    <Row className={styles.row} gutter={8}>
      <Col {...SPAN_4}>
        <div>SPAN_4</div>
      </Col>
      <Col {...SPAN_8}>
        <div>SPAN_8</div>
      </Col>
      <Col {...SPAN_12}>
        <div>SPAN_12</div>
      </Col>
    </Row>
  );
};

export default index;
