import moment from "moment";
import React from "react";
import { DEFAULT_DATETIME_FORMAT, DEFAULT_DATE_FORMAT, DEFAULT_TIME_FORMAT } from "..";

const index = () => {
  return (
    <div>
      <div>YYYY-MM-DD HH:mm:ss: {moment().format(DEFAULT_DATETIME_FORMAT)}</div>
      <div>YYYY-MM-DD: {moment().format(DEFAULT_DATE_FORMAT)}</div>
      <div>HH:mm:ss: {moment().format(DEFAULT_TIME_FORMAT)}</div>
    </div>
  );
};

export default index;
