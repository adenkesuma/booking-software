import { FC } from 'react'
import ReactCalendar from 'react-calendar'

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  return (
    <ReactCalendar 
      minDate={new Date()}
      className='REACT-CALENDAR p-2'
      view='month'
      onClickDay={(date) => console.log(date)}
    />
  )
}

export default Calendar
