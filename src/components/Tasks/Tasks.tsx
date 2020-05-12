import React, { FC } from "react";
import Paper from "./Paper";
import Subtitle from "./Titles/Subtitle";
import MenuItem from "@material-ui/core/MenuItem";
import { Select, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { useStyles } from "./styles";
import SubstitutedIcon from "./icons/SubstitutedIcon";
import moment from "moment";

export default {
  title: "Tasks"
};

const getDayCounts = (date: number) => {
  const today = moment();
  const deadline = moment.unix(date);
  const diff = moment(deadline).diff(today, "days");
  return diff >= 0 ? diff + 1 : 0;
};

export const Tasks: FC<IProps> = ({ tasks }) => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = React.useState<string>("Все задачи");

  const handleSecondSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectValue(event.target.value as string);
  };

  return (
    <Paper className={classes.paper} variant="outlined">
      <div className={classes.paperHeader}>
        <Subtitle className={classes.subtitle}>
          Задачи ({tasks.length})
        </Subtitle>
        <Select
          value={selectValue}
          onChange={handleSecondSelectChange}
          variant="outlined"
          className={classes.select}
        >
          <MenuItem value="Все задачи">Все задачи</MenuItem>
          <MenuItem value="Привлечение">
            Привлечение&nbsp;
            <Box component="span" fontWeight="fontWeightMedium">
              (10)
            </Box>
          </MenuItem>
          <MenuItem value="Расширение">
            Расширение&nbsp;
            <Box component="span" fontWeight="fontWeightMedium">
              (2)
            </Box>
          </MenuItem>
          <MenuItem value="Сервисные">
            Сервисные&nbsp;
            <Box component="span" fontWeight="fontWeightMedium">
              (6)
            </Box>
          </MenuItem>
          <MenuItem value="Задачи по замещению">
            Задачи по замещению&nbsp;
            <Box component="span" fontWeight="fontWeightMedium">
              (1)
            </Box>
          </MenuItem>
        </Select>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.taskWrapper}>
        {tasks.map((task: ITask) => (
          <Card
            key={task.id}
            className={`${classes.task} ${classes[task.group]}`}
            elevation={0}
          >
            <div>
              <Typography variant="subtitle1">{task.companyName}</Typography>
            </div>
            <div className={classes.taskContent}>
              <Typography className={classes.trigger}>
                {task.trigger}
              </Typography>
              {task.substituted && (
                <div className={classes.substituted}>
                  <SubstitutedIcon className={classes.substitutedIcon} />
                  <Typography>зам</Typography>
                </div>
              )}
              <Typography
                variant="subtitle1"
                {...(getDayCounts(task.startDeadline)
                  ? { color: "textPrimary" }
                  : { color: "error" })}
              >
                {getDayCounts(task.startDeadline)}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </Paper>
  );
};
