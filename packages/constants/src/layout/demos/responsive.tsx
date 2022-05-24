import { Col, Row } from 'antd';
import React from 'react';
import { COL_RES_LAYOUT } from '..';
import styles from './index.less';

const Responsive = () => {
  return (
    <Row className={styles.row}>
      <Col {...COL_RES_LAYOUT}>
        <div>响应式</div>
      </Col>
    </Row>
  );
};

export default Responsive;