import { Navbartop } from "../../components/navbartop/navbartest";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import AOS from "aos";
import { useEffect } from "react";

export default function MainPage() {
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
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            alignContent: "center",
            height: "100%",
            width: "100vw",
          }}
        >
          <Box
            style={{}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.3 }}
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
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.3 }}
          >
            <IconButton style={{ color: "white" }} href="/graduation">
              <SchoolOutlinedIcon style={{ fontSize: 80 }} />
            </IconButton>
            <h2>Graduação</h2>
          </Box>
          <Box
            style={{}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.3 }}
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
