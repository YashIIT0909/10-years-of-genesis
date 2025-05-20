import React from "react";
import "./AboutusPage.css";
import { motion } from "framer-motion";
import EthereumLogo from '../../assets/Eth-logo.svg';

const hackathons = [
  "Agentic Ethereum Hackathon 2025",
  "Aleph Hackathon 2025",
  "Base Hackathon",
  "ETHGlobal Tokyo 2023",
  "ETHIndia 2024",
  "Eolas X Algo Hackathon 2025",
  "Mode AI Agent Hackathon 2024",
  "Starknet Winter Hackathon 2024"
];

const pointVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: -50 
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 0.1 * index
    }
  })
};

const AboutusPage = () => {
  return (
    <div className="main-containner">
      <h1>About Us</h1>
      <div className="content">
        <p>
          At <strong>Cyberlabs</strong>, we are a vibrant community of
          blockchain visionaries...
        </p>
        <p>
          Over the years, we've proudly showcased our innovation and technical
          prowess at premier hackathons:
        </p>
        <ul>
          {hackathons.map((title, index) => (
            <motion.li
              key={index}
              className="list-item"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={pointVariants}
            >
              <img src={EthereumLogo} alt="logo" />
              <div className="points">{title}</div>
            </motion.li>
          ))}
        </ul>
        <p>
          Each win and participation reflects the relentless curiosity...
        </p>
      </div>
    </div>
  );
};

export default AboutusPage;
