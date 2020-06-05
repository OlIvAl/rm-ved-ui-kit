import React, { FC } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default {
  title: "PreLoaders",
  component: CircularProgress
};

const useStyles = makeStyles({
  "@keyframes linearLoading": {
    "0%": {
      opacity: 0.4,
      transform: "scale(1, 1)"
    },
    "50%": {
      opacity: 1,
      transform: "scale(1.2, 1.2)"
    },
    "100%": {
      opacity: 0.4,
      transform: "scale(1, 1)"
    }
  },

  loadingDots: {
    textAlign: "center",
    width: "100%",

    "& div": {
      display: "inline-block",
      height: 10,
      width: 10,
      marginRight: 4,
      backgroundColor: "#17BB4F",
      borderRadius: 10,
      animationName: "$linearLoading",
      animationDuration: 1500,
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",

      "&:nth-child(2)": {
        animationDelay: 500
      },

      "&:nth-child(3)": {
        animationDelay: 1000
      }
    }
  }
});

export const LinearLoader: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingDots} data-testid="linear-loader">
      <div />
      <div />
      <div />
    </div>
  );
};
