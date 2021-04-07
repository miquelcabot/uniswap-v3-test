import { Contract, ContractFactory } from '@ethersproject/contracts';
import { expect } from 'chai'
import { ethers } from 'hardhat'

const UniswapV2Router02Address: string = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

describe('Swap contract', () => {
  let Swap: ContractFactory
  let swap: Contract

  beforeEach('deploy', async () => {
    Swap = await ethers.getContractFactory('Swap')
    swap = await Swap.deploy(UniswapV2Router02Address)
  })

  it('Swap contract is deployed', async () => {
    expect(swap.address).to.not.be.undefined;
  })

})
