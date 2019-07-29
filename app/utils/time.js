import moment from 'moment';

export function getDateTime(unixTS) {
  return moment.unix(unixTS).format('M/D/YYYY, h:mm a')
}