import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./style.css";
import { Navbartop } from "../../components/navbartop/navbartest";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Graduation() {
  const Box = styled(motion.div)``;

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
        <AnimateSharedLayout>
          <motion.ul layout initial={{ borderRadius: 25 }}>
            {items.map((item) => (
              <Item key={item} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>TESTE</h1>
      <h1>TESTE</h1>
      <h1>TESTE</h1>
      <h2>blá blá blá blá blá blá blá blá blá</h2>
    </motion.div>
  );
}

const items = [0, 1, 2];

const SideBarBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 50vh;
  margin-top: 10%;
`;

const TittleStart = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-gap: 5px;
`;

const Teste = styled.div`
  display: grid;
  color: black;
  width: 100%;
`;
