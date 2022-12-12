import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time
    style={{ fontSize: "15px", color: "#565b65" }}
    dateTime={dateString}
  >
    {format(date, 'LLLL	d, yyyy')}
  </time>
}

export default DateFormatter