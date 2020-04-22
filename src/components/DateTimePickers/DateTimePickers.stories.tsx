import React, { useState } from "react";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";

export default {
  title: "DateTimePickers",
  component: DateTimePicker
};

export const DateTimePickers = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  return (
    <>
      <div>
        <Typography>Без тулбара</Typography>
        <DateTimePicker
          disableToolbar
          format="dd/MM/yy hh:mm"
          variant="inline"
          ampm={false}
          inputVariant="outlined"
          value={selectedDate}
          invalidDateMessage="Неправильный формат"
          onChange={handleDateChange}
        />
      </div>
      <div>
        <Typography>С тулбаром</Typography>
        <DateTimePicker
          variant="inline"
          format="dd/MM/yy hh:mm"
          ampm={false}
          invalidDateMessage="Неправильный формат"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <Typography>Без тулбара и с иконкой</Typography>
        <KeyboardDateTimePicker
          disableToolbar
          format="dd/MM/yy hh:mm"
          variant="inline"
          ampm={false}
          invalidDateMessage="Неправильный формат"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </>
  );
};
