import { Form, Input } from 'antd';
import React from 'react';
import { FORM_LAYOUT_1_1 } from '..';

const formLayout = () => {
  return (
    <Form {...FORM_LAYOUT_1_1}>
      <Form.Item label="label:wrapper = 1:1" name="layout">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default formLayout;