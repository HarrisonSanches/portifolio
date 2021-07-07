import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./style.css";
import { Navbartop } from "../../components/navbartop/navbartest";

export default function Graduation() {
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
          <motion.ul
            layout
            initial={{ borderRadius: 25 }}
            style={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#66003b",
              padding: "20px",
              borderRadius: "25px",
            }}
          >
            {items.map(
              (item) =>
                item === 1 ? <Item key={item} /> : <Item2 key={item} />
              // <Item key={item} />
            )}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </>
  );
}

const items = [0, 1];

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      style={{
        backgroundColor: "rgba(214, 214, 214, 0.5)",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <motion.div layout>
        <h1>Técnico em Portos</h1>
      </motion.div>
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
      <h3>Instituição: IFES</h3>
      <h3>Conclusão: 2018</h3>
    </motion.div>
  );
}

function Item2() {
  const [isOpen, setIsOpen2] = useState(false);

  const toggleOpen2 = () => setIsOpen2(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen2}
      initial={{ borderRadius: 10 }}
      style={{
        backgroundColor: "rgba(214, 214, 214, 0.5)",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <motion.div layout>
        <h1>Bacharelado em Sistemas de Informação</h1>
      </motion.div>
      <AnimatePresence>{isOpen && <Content2 />}</AnimatePresence>
    </motion.li>
  );
}

function Content2() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <h3>Instituição: IFES</h3>
      <h3>Período: 7º</h3>
    </motion.div>
  );
}
