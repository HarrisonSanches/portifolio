import "./style.css";

import styled from "styled-components";
import { motion } from "framer-motion";
import { Navbartop } from "../../components/navbartop/navbartest";
import { Link } from "react-router-dom";

const Box = styled(motion.div)``;

export default function Home() {
  return (
    <>
      <Navbartop />
      <SideBarBody>
        <Teste>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#66003b",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 style={{ color: "white" }}>Harrison Sanches</h1>
            </Box>
          </div>
          <Box
            style={{ backgroundColor: "white" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <h4>Software engineer fullstack</h4>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "20vh",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5 }}
          >
            <Link
              to="/main"
              className=" button-home button-home-color button-xl"
              style={{ textDecoration: "none" }}
            >
              Saiba mais
            </Link>
          </Box>
        </Teste>
      </SideBarBody>
    </>
  );
}

const SideBarBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 80vh;
  margin-top: 10%;
`;

const Teste = styled.div`
  display: grid;
  color: black;
  width: 100%;
`;
