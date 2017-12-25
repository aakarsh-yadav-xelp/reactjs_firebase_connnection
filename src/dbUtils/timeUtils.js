import moment from "moment";
export function convertDateStringToTimeAgoFromNow(dateString) {
  return moment(dateString).fromNow();
}
