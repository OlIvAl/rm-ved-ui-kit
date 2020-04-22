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
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div>
        <KeyboardTimePicker
          disableToolbar
          minutesStep={5}
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
          minutesStep={5}
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
          minutesStep={5}
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
          minutesStep={5}
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
