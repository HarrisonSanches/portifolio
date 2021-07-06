import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { Fragment } from "react";
import { useState } from "react";
// import React from "react";
import clsx from "clsx";
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
import {
  FiHome,
  FiCoffee,
  FiCodesandbox,
  FiActivity,
  FiSmartphone,
} from "react-icons/fi";

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

const navLinks = [
  { title: "Sobre", path: "/#" },
  { title: "Serviços", path: "/#" },
  { title: "Equipe", path: "/#" },
  { title: "Contato", path: "/#" },
  { title: "login", path: "/#" },
];

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

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function SideDrawer() {
  const classes = useStyles();
  type Anchor = "right";
  const [state, setState] = React.useState({
    right: false,
  });

  const [isOpen, setIsOpen] = useState(false);

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
            <Menu fontSize="large" style={{ color: `purple` }} />
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
