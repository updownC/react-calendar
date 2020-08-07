import moment from 'moment'
import 'moment/locale/ko'

const getDaysInMonth = (date) => {
  const days = []
  const daysInMonth = moment(date).daysInMonth()
  
  for (let i = 1; i < daysInMonth +1; i++){
    days.push(i)
  }
  
  return days
}

const getLastDaysInLastMonth = (date) => {
  const days = []
  const firstDayOfMonth = moment(date).startOf('month').format('d')
  const lastDayOfLastMonth = moment(date).subtract(1,'month').endOf('month').format('D')
  
  for (let i = 0; i < firstDayOfMonth; i++){
    days.push(lastDayOfLastMonth - i)
  }
  
  return days.reverse()
}

const getFirstDaysInNextMonth = (date) => {
  const days = []
  const lastDayOfMonth = moment(date).endOf('month').format('d')
  for (let i = 1; i < 7 - lastDayOfMonth; i++){
    days.push(i)
  }
  return days
}

export const getTotalDays = (date) => {
  if (date){
    return {
      lastMonth : getLastDaysInLastMonth(date),
      thisMonth : getDaysInMonth(date),
      nextMonth : getFirstDaysInNextMonth(date)
    }
  }
}

export const isToday = (date, day) => {
 
  return day.toString() === date.format('D')
}