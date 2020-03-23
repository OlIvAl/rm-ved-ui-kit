import React from "react";
import Radio from "@material-ui/core/Radio";
import { FormControl } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default {
  title: "RadioButtons",
  component: Radio
};

export const RadioButtons = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio color="primary" />}
          label="Female"
        />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="other"
          control={<Radio color="default" />}
          label="Other"
        />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
  );
};
