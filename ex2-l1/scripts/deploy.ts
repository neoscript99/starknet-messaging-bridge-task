import { ethers } from "hardhat";

async function main() {

  const Ex2Minter = await ethers.getContractFactory("Ex2Minter");
  const minter = await Ex2Minter.deploy();

  await minter.deployed();

  console.log("Ex2Minter deployed to:", minter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
