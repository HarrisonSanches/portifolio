import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./style.css";
import { Navbartop } from "../../components/navbartop/navbartest";

export default function Graduation() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ translateX: 300 }}
    >
      {/* <Navbartop /> */}
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
            {items.map((item) => (
              <CourseCard
                // title={item.title}
                // institute={item.institute}
                // status={item.status}

                // pegando as váriaveis do objeto item e spread(espalhar) como props
                {...item}
                key={item.title}
                // title={"teste"}
              />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </motion.div>
  );
}

// array do tipo props do card
const items: CourseCardProps[] = [
  {
    title: "Bacharelado em Sistemas de informação",
    institute: "IFES",
    status: "Período: 7º",
  },
  {
    title: "Técnico em Portos",
    institute: "IFES",
    status: "Conclusão: 2018",
  },
];
// propriedades do componente coused
interface CourseCardProps {
  status: string;
  title: string;
  institute: string;
}

// add na pasta components
// pegando os elementos já populados! (object destructring)
function CourseCard({ status, title, institute }: CourseCardProps) {
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
        <h1>{title}</h1>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3>{institute}</h3>
            <h3>{status}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

// function Item() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <motion.li
//       layout
//       onClick={toggleOpen}
//       initial={{ borderRadius: 10 }}
//       style={{
//         backgroundColor: "rgba(214, 214, 214, 0.5)",
//         borderRadius: "10px",
//         padding: "20px",
//         marginBottom: "20px",
//         overflow: "hidden",
//         cursor: "pointer",
//       }}
//     >
//       <motion.div layout>
//         <h1>Técnico em Portos</h1>
//       </motion.div>
//       <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
//     </motion.li>
//   );
// }

// function Content() {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <h3>Instituição: IFES</h3>
//       <h3>Conclusão: 2018</h3>
//     </motion.div>
//   );
// }

// function Item2() {
//   const [isOpen, setIsOpen2] = useState(false);

//   const toggleOpen2 = () => setIsOpen2(!isOpen);

//   return (
//     <motion.li
//       layout
//       onClick={toggleOpen2}
//       initial={{ borderRadius: 10 }}
//       style={{
//         backgroundColor: "rgba(214, 214, 214, 0.5)",
//         borderRadius: "10px",
//         padding: "20px",
//         marginBottom: "20px",
//         overflow: "hidden",
//         cursor: "pointer",
//       }}
//     >
//       <motion.div layout>
//         <h1>Bacharelado em Sistemas de Informação</h1>
//       </motion.div>
//       <AnimatePresence>{isOpen && <Content2 />}</AnimatePresence>
//     </motion.li>
//   );
// }

// function Content2() {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       // style={{ display: "flex", justifyContent: "flex-start" }}
//     >
//       <h3>Instituição: IFES</h3>
//       <h3>Período: 7º</h3>
//     </motion.div>
//   );
// }
