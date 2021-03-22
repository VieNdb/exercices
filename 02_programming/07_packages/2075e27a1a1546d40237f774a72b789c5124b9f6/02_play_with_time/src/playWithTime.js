import moment from "moment";

function formatDate(date) {
  return moment(date).format("dddd Do MMMM YYYY");
}
function yearsSinceDate(date) {
  return parseInt(moment(date).fromNow());
}
function daysSinceDate(date) {}
function getDayFromDate(date) {
  moment(date).format("dddd");
}
export { formatDate, yearsSinceDate, daysSinceDate, getDayFromDate };
