import * as React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import SideDrawer from "../drawer/drawer";
import { Hidden } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Omit } from "@material-ui/types";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import WorkIcon from "@material-ui/icons/Work";
import FreeBreakfast from "@material-ui/icons/FreeBreakfast";
import Linkedin from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    color: "purple",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "purple",
  },
  icon: {
    width: "30px",
    color: "purple",
  },
  color: {
    background: "white",
  },
  label: {
    textTransform: "capitalize",
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
    // ESTUDAR O QUE É ISSO AQUI
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export const Navbartop = () => {
  // const navLinks = [
  //   { title: "Sobre", path: "/#" },
  //   { title: "Serviços", path: "/#" },
  //   { title: "Equipe", path: "/#" },
  //   { title: "Contato", path: "/#" },
  // ];

  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.color}>
      <Toolbar>
        <Container maxWidth="xl" className={classes.navDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home" href="/">
            <Home fontSize="large" style={{ color: "purple" }} />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <ListItemLink
                to="/#"
                primary="Linkedin"
                icon={<Linkedin style={{ color: "purple" }} />}
              />
              <ListItemLink
                to="/#"
                primary="GitHub"
                icon={<Github style={{ color: "purple" }} />}
              />
              <ListItemLink
                to="/#"
                primary="Contato"
                icon={<SmartphoneIcon style={{ color: "purple" }} />}
              />
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer />
            {/* "teste" */}
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
