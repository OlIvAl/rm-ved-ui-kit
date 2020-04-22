import "date-fns";
import React from "react";
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker
} from "@material-ui/pickers";

export default {
  title: "TimePickers",
  component: KeyboardDatePicker
};

export const TimePickers = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div>
        <KeyboardTimePicker
          disableToolbar
          inputVariant="outlined"
          variant="inline"
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          invalidDateMessage="Неправильный формат времени"
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </div>
      <div>
        <TimePicker
          disableToolbar
          inputVariant="outlined"
          variant="inline"
          ampm={false}
          value={selectedDate}
          invalidDateMessage="Неправильный формат времени"
          onChange={handleDateChange}
        />
      </div>
      <div>
        <KeyboardTimePicker
          inputVariant="outlined"
          variant="inline"
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          invalidDateMessage="Неправильный формат времени"
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </div>
      <div>
        <KeyboardTimePicker
          inputVariant="outlined"
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          invalidDateMessage="Неправильный формат времени"
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </div>
    </>
  );
};
