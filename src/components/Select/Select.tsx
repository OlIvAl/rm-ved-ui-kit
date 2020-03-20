import React from "react";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

export default {
  title: "DropDowns",
  component: Select
};

export const Selects = () => {
  const [firstSelectValue, setFirstSelectValue] = React.useState("Value 1");
  const [secondSelectValue, setSecondSelectValue] = React.useState("");

  const handleFirstSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFirstSelectValue(event.target.value as string);
  };

  const handleSecondSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSecondSelectValue(event.target.value as string);
  };
  return (
    <>
      <div>
        <Select
          value={firstSelectValue}
          onChange={handleFirstSelectChange}
          variant="outlined"
        >
          <MenuItem value="Value 1">Value 1</MenuItem>
          <MenuItem value="Value 2">Value 2</MenuItem>
          <MenuItem value="Value 3">Value 3</MenuItem>
          <MenuItem value="Value 3 Value 3">Value 3 Value3</MenuItem>
        </Select>
      </div>
      <div>
        <Select
          displayEmpty
          value={secondSelectValue}
          onChange={handleSecondSelectChange}
          variant="outlined"
        >
          <MenuItem value="" disabled>
            Выберите значение
          </MenuItem>
          <MenuItem value="Value 1">Value 1</MenuItem>
          <MenuItem value="Value 2">Value 2</MenuItem>
          <MenuItem value="Value 3">Value 3</MenuItem>
          <MenuItem value="Value 3 Value 3">Value 3 Value3</MenuItem>
        </Select>
      </div>
    </>
  );
};
