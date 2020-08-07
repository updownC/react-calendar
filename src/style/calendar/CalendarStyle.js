import styled,{css} from 'styled-components'

export const CalendarContainer = styled.div`
  display:flex;
  flex-direction: column;
  
  width: 35rem;
  height: 45rem;
  padding : calc(100% / 15);
  padding-top : 0;
  border-radius: .8rem;

  -webkit-box-shadow: 10px 10px 32px -12px rgba(0,0,0,0.17);
  -moz-box-shadow: 10px 10px 32px -12px rgba(0,0,0,0.17);
  box-shadow: 10px 10px 32px -12px rgba(0,0,0,0.17);
`
export const MonthBlock = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5rem;
  margin: calc(100% / 8) 0;
  padding: 0 1rem;
  border-radius: .8rem .8rem 0 0;
  
  color: #212529;
  font-size: 4rem;
  font-family: "Montserrat";
`
export const WeekDayCellBlock = styled.div`
  display: flex;
  
  width: 100%;
  height: calc(100% / 9);
`
export const WeekDayCell = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  
  width: calc(100% / 7);
  height: 100%;
  
  color: #343a40;
  font-size: 1.5rem;
  font-weight: normal;
`
export const DayCellBlock = styled.div`
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  
  width:100%;
  height: calc(100% * 5/8);
`
export const DayCell = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;  

  width: calc(100% / 7);
  height: calc(100% / 6);

  font-size: 1.5rem;
  cursor: pointer;
  transition: background .1s ease-in-out;

  &:hover{
    background-color: #ecf0f1;
  }
`
export const DayCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  ${({isToday}) => isToday && css`
    background-color : #34495e;
    color: white;
  `}
`

export const InactiveDayCell = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;  

  width: calc(100% / 7);
  height: calc(100% / 6);
  color: #ced4da;

  font-size: 1.5rem;
`