import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Header } from "../components";
import { scheduleData } from "../data/dummy";

const localizer = momentLocalizer(moment);

const events = scheduleData.map((item) => ({
  id: item.Id,
  title: item.Subject,
  start: new Date(item.StartTime),
  end: new Date(item.EndTime),
}));

const Calendar = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category={"App"} title={"Calendar"} />
      <div style={{ height: 600 }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          defaultDate={new Date(2021, 0, 10)}
          defaultView="month"
        />
      </div>
    </div>
  );
};

export default Calendar;
