import React from 'react'
import { Header } from '../components'
import { Agenda, Day, DragAndDrop, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'

const Calendar = () => {
  return (
	<div className='p-2 m-4 mt-5 bg-white md:m-4 rounded-3xl md:p-4 '>
    <Header category={"App"} title={"Calendar"} />

    <ScheduleComponent
    height={"1650px"}
    eventSettings={{dataSource:scheduleData}}
    selectedDate={new Date(2021,0,10)}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
    </ScheduleComponent>
  </div>
  )
}

export default Calendar