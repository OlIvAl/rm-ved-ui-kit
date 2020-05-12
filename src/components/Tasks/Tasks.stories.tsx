import React from "react";
import { Tasks } from "./Tasks";
import TASKS from "./tasks.json";

export default {
  title: "Tasks"
};

export const Tasks_ = () => <Tasks tasks={TASKS as ITask[]} />;
