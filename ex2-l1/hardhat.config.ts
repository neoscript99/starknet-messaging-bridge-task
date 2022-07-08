import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Go to https://infura.io/ and create a new project
// Replace this with your Infura project ID
const INFURA_PROJECT_ID = "9f0e54ba793a45b2bf4574bbd51ad990";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const KEY1 = "9ded064a0884e3d63444d218dbb584c4778d5b8c4cf5a04d470682df5012a2a5";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${KEY1}`]
    }
  },
  etherscan: {
    apiKey: {
      goerli: 'CBQFESP5U5J7XBNBQFDHCAH529U166SV9B'
    }
  }
};

export default config;
