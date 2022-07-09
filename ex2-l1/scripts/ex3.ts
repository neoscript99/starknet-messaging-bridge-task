import { ethers } from "hardhat";

async function main() {

  const Contract = await ethers.getContractFactory("Ex3Conumer");
  const cont = await Contract.deploy();

  await cont.deployed();

  console.log("Contract deployed to:", cont.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
