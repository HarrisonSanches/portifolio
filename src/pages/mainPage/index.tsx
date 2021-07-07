import { Navbartop } from "../../components/navbartop/navbartest";
import { Grid, Button, makeStyles, Link, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import AOS from "aos";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    background: "#107035",
    "&:hover": {
      background: "#f00",
    },
    borderRadius: 0,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "#107035",
    hover: "#107035",
  },
});

export default function MainPage() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbartop />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          height: "93.4vh",
          backgroundColor: "#74023b",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            justifyItems: "center",
            alignContent: "center",
            height: "100%",
            width: "100vw",
            backgroundColor: "#74023b",
          }}
        >
          <Box
            style={{}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <IconButton style={{ color: "white" }} href="/">
              <SentimentVerySatisfiedOutlinedIcon style={{ fontSize: 80 }} />
            </IconButton>
            <h2 data-aos="fade-down">Me</h2>
          </Box>
          <Box
            style={{}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <IconButton style={{ color: "white" }} href="/">
              <SchoolOutlinedIcon style={{ fontSize: 80 }} />
            </IconButton>
            <h2>Graduações</h2>
          </Box>
          <Box
            style={{}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4 }}
          >
            <IconButton style={{ color: "white" }} href="/">
              <CodeOutlinedIcon style={{ fontSize: 80 }} />
            </IconButton>
            <h2>Projetos</h2>
          </Box>
        </div>
      </div>
    </>
  );
}

const Box = styled(motion.div)`
  display: grid;
  width: 30%;
  height: 30;
  bordercolor: "white";
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;
