import { Menu } from "@material-ui/icons";
import React from "react";
// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Linkedin from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
  },
});

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default function SideDrawer() {
  const classes = useStyles();
  type Anchor = "right";
  const [state, setState] = React.useState({
    right: false,
  });

  // TODO ADD DRAG EVENT (REACT.DRAGEVENT)
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      <List>
        <ListItemLink to="/#" primary="Linkedin" icon={<Linkedin />} />
        <ListItemLink to="/#" primary="Github" icon={<Github />} />
        <ListItemLink to="/#" primary="Contato" icon={<SmartphoneIcon />} />
      </List>
    </div>
  );

  return (
    <>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu fontSize="large" style={{ color: `#66003b` }} />
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
