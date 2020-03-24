import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default {
  title: "Checkboxes",
  component: Checkbox
};

export const Checkboxes = () => {
  return (
    <>
      <div>
        <FormControlLabel
          value="female"
          control={<Checkbox color="primary" />}
          label="Primary"
        />
      </div>
      <div>
        <FormControlLabel
          value="female"
          control={<Checkbox color="secondary" />}
          label="Secondary"
        />
      </div>
      <div>
        <FormControlLabel
          value="female"
          control={<Checkbox color="default" />}
          label="Default"
        />
      </div>

      <div>
        <FormControlLabel
          value="female"
          control={<Checkbox color="secondary" disabled />}
          label="Disabled"
        />
      </div>
    </>
  );
};
