import { BigNumber } from '@ethersproject/bignumber';
import { Contract, ContractFactory } from '@ethersproject/contracts';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai'
import { ethers } from 'hardhat'

const UniswapV2Router02Address: string = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

describe('Swap contract', () => {
  
  let Swap: ContractFactory
  let SampleToken: ContractFactory
  let swap: Contract
  let sampleToken: Contract
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress

  beforeEach('deploy', async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    SampleToken = await ethers.getContractFactory('SampleToken')
    sampleToken = await SampleToken.deploy(1_000_000)

    Swap = await ethers.getContractFactory('Swap')
    swap = await Swap.deploy(UniswapV2Router02Address)
  })

  it('Sample token contract is deployed', async () => {
    expect(sampleToken.address).to.not.be.undefined;
  })

  it('Swap contract is deployed', async () => {
    expect(swap.address).to.not.be.undefined;
  })

  it('Swap contract has the correct initial values', async () => {
    let totalSupply: BigNumber = await sampleToken.totalSupply()
    let balance: BigNumber = await sampleToken.balanceOf(owner.address)

    expect(await sampleToken.name()).to.equal('Sample Token')
    expect(await sampleToken.symbol()).to.equal('SMP')
    expect(await sampleToken.decimals()).to.equal(18)
    expect(totalSupply).to.equal(balance)
  })

})
