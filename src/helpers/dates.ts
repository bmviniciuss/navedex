import moment from 'moment'

export function toInputFormat (timestamp:string) {
  return moment.utc(timestamp).format('yyyy-MM-DD')
}
