import { DEFAULT_DATETIME_FORMAT } from "toCfe-constants";
import moment from "moment";

/**
 * 格式化时间
 * @param {(string | number)} [time] 时间
 * @param {*} [format=DEFAULT_DATETIME_FORMAT] 转换成的格式[YYYY-MM-DD HH:mm:ss]
 * @return {*}
 */
const formatTime = (
  time?: string | number,
  format = DEFAULT_DATETIME_FORMAT
) => {
  return moment(time).format(format);
};

export default formatTime;