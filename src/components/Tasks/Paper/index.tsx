import MuiPaper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const Paper = withStyles({
  root: {
    borderRadius: 12,
    padding: 24
  }
})(MuiPaper);

export default Paper;
