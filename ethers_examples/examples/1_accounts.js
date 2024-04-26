const { ethers } = require("ethers");

const INFURA_ID = "2ead481d72884af881fe73114547e08a";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
};

main();

// import { ethers } from "ethers";

// const INFURA_ID = "2ead481d72884af881fe73114547e08a";

// const provider = ethers.providers.JsonRpcProvider(
//   `https://mainnet.infura.io/v3/${INFURA_ID}`
// );

// provider.getBalance("0x6aF87452fa7c362058Ef0dE4F733B094F7A35004");
