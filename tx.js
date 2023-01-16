// Setup: npm install alchemy-sdk
// import { Alchemy, Network } from "alchemy-sdk";
const Alchemy = require('alchemy-sdk');
const Network = require('alchemy-sdk');


const config = {
  apiKey: "LI5Jac5S56Yek1xbJSsicRhKAWtmzKB8",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

async function main() {
    const data = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      fromAddress: "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
      category: ["external", "internal", "erc20", "erc721", "erc1155"],
    });
  
    console.log(data);
  }
  
  main();