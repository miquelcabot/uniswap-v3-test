import { ethers } from 'hardhat'
import { Contract, ContractFactory } from '@ethersproject/contracts';

const UniswapV2Router02Address: string = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

async function main() {
  let Swap: ContractFactory
  let SampleToken: ContractFactory
  let swap: Contract
  let sampleToken: Contract

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  SampleToken = await ethers.getContractFactory('SampleToken')
  sampleToken = await SampleToken.deploy(1_000_000)

  Swap = await ethers.getContractFactory('Swap')
  swap = await Swap.deploy(UniswapV2Router02Address)

  await sampleToken.deployed();
  await swap.deployed();

  console.log("SampleToken deployed to:", sampleToken.address);
  console.log("Swap deployed to:", swap.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });