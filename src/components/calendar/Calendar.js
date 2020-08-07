import React,{useState, useEffect} from 'react';
import moment from 'moment'
import 'moment/locale/ko'
import * as s from "../../style/calendar/CalendarStyle"
import { getTotalDays, isToday } from '../../utils/calendar/moment.js'

function Calendar() {
  const [date, setDate] = useState(moment())
  const [days, setDays] = useState({})
  
  useEffect(()=>{
    setDays((prev)=>{
      return {...prev, ...getTotalDays(date)}
    })
  },[date])

  const renderWeekDayName = () => moment.weekdaysShort().map(dayName => (
    <s.WeekDayCell key={dayName} dayName={dayName}>
      {dayName}
    </s.WeekDayCell>
    ))
  
  const renderDaysInMonth = () => {
    if (Object.keys(days).length > 1){
      const totalDays = []
      
      days.lastMonth.forEach(day=>{
        totalDays.push(
          <s.InactiveDayCell key={`last${day}`}>{day}</s.InactiveDayCell>
          )
        })
        
      days.thisMonth.forEach(day=>{
        totalDays.push(
          <s.DayCell key={day} >
            <s.DayCircle isToday={isToday(date, day)} > {day} </s.DayCircle> 
          </s.DayCell>
          )
        })
      
      days.nextMonth.forEach(day=>{
        totalDays.push(
          <s.InactiveDayCell key={`next${day}`}>{day}</s.InactiveDayCell>
          )
        })
        
      return totalDays
    }
  }
      
      return (
        <>
      <h2>Calendar</h2>
        <s.CalendarContainer>
          <s.MonthBlock>{date.locale('en').format("MMMM")}</s.MonthBlock>
          <s.WeekDayCellBlock>{renderWeekDayName()}</s.WeekDayCellBlock>
          <s.DayCellBlock>{renderDaysInMonth()}</s.DayCellBlock>
        </s.CalendarContainer>
      </>
    );
}

export default React.memo(Calendar);