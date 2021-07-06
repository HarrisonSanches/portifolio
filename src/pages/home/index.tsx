import "./style.css";

import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import { Navbartop } from "../../components/navbartop/navbartest";

const AppContainer = styled.div``;

const Box = styled(motion.div).attrs(() => ({ transition: { duration: 1 } }))``;

export default function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <Navbartop />
      <SideBarBody>
        <Teste>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <h1>HARRISON SANCHES</h1>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <h4>Software engineer fullstack</h4>
          </div>
        </Teste>
      </SideBarBody>
      {/* <AnimateSharedLayout>
          {animate ? <AlignedState /> : <InitialState />}
        </AnimateSharedLayout> */}
    </>
  );
}

const AlignedState = () => (
  <>
    <Box layoutId="1" style={{ backgroundColor: "gray" }}>
      <h1>HARRISON</h1>
    </Box>
    <Box layoutId="3" style={{ backgroundColor: "blue" }}>
      <h1>SANCHES</h1>
    </Box>
  </>
);

const InitialState = () => (
  <>
    <Box
      layoutId="1"
      style={{
        position: "absolute",
        top: "37.5vh",
        left: 0,
      }}
    />
    <Box
      layoutId="3"
      style={{ position: "absolute", right: 0, top: "37.5vh" }}
    />
    <Box layoutId="4" style={{ position: "absolute", bottom: 0 }} />
  </>
);

const SideBarBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 50vh;
  margin-top: 10%;
  // background: red;
`;

const TittleStart = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 5px;
`;

const Teste = styled.div`
  display: grid;
  background: purple;
  color: black;
  width: 100%;
`;
