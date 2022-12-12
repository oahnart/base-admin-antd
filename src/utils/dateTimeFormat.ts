import moment from 'moment-timezone';

export function timeFormat(date: any) {
  // let rawTime = new Date(date).toString()
  let format = moment(date).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");
  // let format = moment(rawTime).format("YYYY-MM-DD HH:mm:ss");
  return format;
}