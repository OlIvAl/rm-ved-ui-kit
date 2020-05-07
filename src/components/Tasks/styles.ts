import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 0,
    width: 468,
    height: 800
  },
  paperHeader: {
    paddingRight: 24
  },
  subtitle: {
    marginBottom: 24
  },
  select: {
    width: "100%"
  },
  divider: {
    margin: "16px 0"
  },
  taskWrapper: {
    paddingRight: 24,
    overflow: "auto",
    maxHeight: "708px"
  },
  task: {
    padding: "8px 16px",
    borderRadius: 4,
    margin: "16px 0",
    "&:last-child, &:first-child": {
      margin: 0
    }
  },
  expansion: {
    background: "#c3ffd8"
  },
  attract: {
    background: "#f9e0ff"
  },
  service: {
    background: "#e6eeff"
  },
  taskContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  substituted: {
    display: "flex",
    width: 54,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    background: "#fff",
    marginRight: 16
  },
  substitutedIcon: {
    marginRight: 4
  },
  trigger: { flex: 1 }
});
