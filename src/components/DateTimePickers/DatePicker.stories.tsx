import "date-fns";
import React from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default {
  title: "DatePickers",
  component: KeyboardDatePicker
};

export const DatePickers = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleDisableDate = (day: Date | null) => {
    let disbledDay: number | null = selectedDate && selectedDate.getDate() + 3;
    return !!(day && day.getDate() === disbledDay);
  };

  return (
    <Grid container={true} direction="column">
      <Grid item xs={12}>
        <Typography>Без тулбара (3-й день не активный)</Typography>
        <KeyboardDatePicker
          emptyLabel="дд/мм/гггг"
          disablePast
          minDateMessage="Нельзя выбрать прошедшую дату"
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          value={selectedDate}
          invalidDateMessage="Неправильный формат даты"
          onChange={handleDateChange}
          inputVariant="outlined"
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          shouldDisableDate={handleDisableDate}
        />
      </Grid>
      <Typography>Без тулбара и без иконки календаря</Typography>
      <Grid item xs={12}>
        <DatePicker
          emptyLabel="дд/мм/гггг"
          disableToolbar
          disablePast
          minDateMessage="Нельзя выбрать прошедшую дату"
          variant="inline"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          invalidDateMessage="Неправильный формат даты"
          inputVariant="outlined"
        />
      </Grid>
      <Grid item>
        <Typography>С тулбаром</Typography>
        <KeyboardDatePicker
          variant="inline"
          format="dd/MM/yyyy"
          disablePast
          minDateMessage="Нельзя выбрать прошедшую дату"
          value={selectedDate}
          onChange={handleDateChange}
          inputVariant="outlined"
          invalidDateMessage="Неправильный формат даты"
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>В диалоговом окне</Typography>
        <KeyboardDatePicker
          inputVariant="outlined"
          format="dd/MM/yyyy"
          disablePast
          minDateMessage="Нельзя выбрать прошедшую дату"
          value={selectedDate}
          invalidDateMessage="Неправильный формат даты"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </Grid>
  );
};
