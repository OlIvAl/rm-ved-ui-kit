import React from 'react';
import {addDecorator} from '@storybook/react';
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "../src/theme";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

addDecorator(storyFn => (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </MuiPickersUtilsProvider>)
);
