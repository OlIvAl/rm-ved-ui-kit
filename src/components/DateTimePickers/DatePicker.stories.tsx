import "date-fns";
import React from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default {
  title: "DatePickers",
  component: KeyboardDatePicker
};

const CustomKeyboardDatePicker = withStyles({})(KeyboardDatePicker);

export const DatePickers = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Grid container={true} direction="column">
      <Grid item xs={12}>
        <Typography>Без тулбара</Typography>
        <CustomKeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          value={selectedDate}
          invalidDateMessage="Неправильный формат даты"
          onChange={handleDateChange}
          inputVariant="outlined"
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
      <Typography>Без тулбара и без иконки календаря</Typography>
      <Grid item xs={12}>
        <DatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          invalidDateMessage="Неправильный формат даты"
          inputVariant="outlined"
        />
      </Grid>
      <Grid item>
        <Typography>С тулбаром</Typography>
        <CustomKeyboardDatePicker
          variant="inline"
          format="MM/dd/yyyy"
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
          format="MM/dd/yyyy"
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
