import React, { FC, PropsWithChildren, ReactElement } from "react";
import Slide from "@material-ui/core/Slide";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { TransitionProps } from "@material-ui/core/transitions";
import Button from "@storybook/react/dist/demo/Button";

export default {
  title: "Snackbar",
  component: Snackbar
};

const TransitionComponent: FC<PropsWithChildren<
  TransitionProps & { children?: ReactElement<any, any> }
>> = props => React.createElement(Slide, { ...props });

export const Notifier: FC<IProps> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClick}>Open error snackbar</Button>
      <Snackbar
        TransitionComponent={TransitionComponent}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert variant="filled" onClose={handleClose} severity="error">
          Ошибка сервера!
        </Alert>
      </Snackbar>
    </>
  );
};
