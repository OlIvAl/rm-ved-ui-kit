import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

export default {
  title: "Dividers",
  component: Divider
};

export const Dividers = () => {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider variant="middle" />
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
    </List>
  );
};
