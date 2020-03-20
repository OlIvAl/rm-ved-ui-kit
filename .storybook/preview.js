import React from 'react';
import { addDecorator } from '@storybook/react';
import {ThemeProvider} from "@material-ui/styles";
import { theme } from "../src/theme";

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);