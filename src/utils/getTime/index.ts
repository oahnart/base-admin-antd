import moment from "moment";

function getTimeRemaning(startAt: any, endAt: any) {
  // let a = moment(startAt, "YYYYMMDD");
  // let b = moment(endAt, "YYYYMMDD");
  // const remingTime = b.diff(a, "days");

  let a = moment(startAt, "YYYYMMDD HH:mm:ss");
  let b = moment(endAt, "YYYYMMDD HH:mm:ss");
  const remingTime = b.diff(a, "days");

  if (remingTime < 0 || isNaN(remingTime)) return 0;
  return remingTime;
}

export { getTimeRemaning };
