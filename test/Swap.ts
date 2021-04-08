import { Contract, ContractFactory } from '@ethersproject/contracts';
import { expect } from 'chai'
import { ethers } from 'hardhat'

const UniswapV2Router02Address: string = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

describe('Swap contract', () => {
  let Swap: ContractFactory
  let SampleToken: ContractFactory
  let swap: Contract
  let sampleToken: Contract

  beforeEach('deploy', async () => {
    SampleToken = await ethers.getContractFactory('SampleToken')
    sampleToken = await SampleToken.deploy(1_000_000)

    Swap = await ethers.getContractFactory('Swap')
    swap = await Swap.deploy(UniswapV2Router02Address)
  })

  it('Swap contract is deployed', async () => {
    expect(swap.address).to.not.be.undefined;
  })

  it('Sample token contract is deployed', async () => {
    expect(sampleToken.address).to.not.be.undefined;
  })

})
