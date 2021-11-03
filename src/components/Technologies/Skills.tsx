import { DiAndroid, DiTerminal } from "react-icons/di";
import {
  SiJava,
  SiFirebase,
  SiGit,
  SiTypescript,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact, FaHardHat } from "react-icons/fa";

export const Skills = [
  {
    slug: "react",
    Component: FaReact,
    title: "React",
    Description: () => (
      <>I build powerful web and mobile interfaces with React</>
    ),
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => (
      <>I like using TypeScript to keep projects clean and maintainable</>
    ),
  },
  {
    slug: "solidity",
    Component: SiSolidity,
    title: "Solidity",
    Description: () => (
      <>
        I have written smart contracts in Solidity, which can be used on any EVM
        compatible blockchain
      </>
    ),
  },
  {
    slug: "web3",
    Component: SiEthereum,
    title: "Ethers.js",
    Description: () => (
      <>Ethers is my tool of choice for creating dApp frontends</>
    ),
  },
  {
    slug: "hardhat",
    Component: FaHardHat,
    title: "Hardhat",
    Description: () => (
      <>
        I can deploy, automate, and test smart contracts using Hardhat & Truffle
      </>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
