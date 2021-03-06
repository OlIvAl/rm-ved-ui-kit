import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ClientsIcon } from "./ClientsIcon";
import { InfoIcon } from "./InfoIcon";
import { ChatIcon } from "./ChatIcon";
import { CoBrowseIcon } from "./CoBrowseIcon";

export default {
  title: "SideBar",
  component: Drawer
};

const drawerWidth = 96;

const useDrawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.common.black,
      width: drawerWidth
    }
  })
);

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    padding: 0
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 124,
    "&:hover": {
      backgroundColor: theme.palette.grey[600]
    }
  },
  icon: { minWidth: "auto" },
  text: {
    whiteSpace: "nowrap",
    color: theme.palette.common.white,
    flex: 0
  }
}));

export const SideBar = () => {
  const styles = useStyles();
  const drawerClasses = useDrawerStyles();

  return (
    <Drawer variant="permanent" classes={drawerClasses}>
      <List className={styles.list}>
        <ListItem className={styles.listItem} button>
          <ListItemIcon className={styles.icon}>
            <ClientsIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Клиенты" />
        </ListItem>
        <ListItem className={styles.listItem} button>
          <ListItemIcon className={styles.icon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Инфо" />
        </ListItem>
        <ListItem className={styles.listItem} button>
          <ListItemIcon className={styles.icon}>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Чат" />
        </ListItem>
        <ListItem className={styles.listItem} button>
          <ListItemIcon className={styles.icon}>
            <CoBrowseIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Co-browse" />
        </ListItem>
      </List>
    </Drawer>
  );
};
