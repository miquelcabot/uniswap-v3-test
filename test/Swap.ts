import { BigNumber } from '@ethersproject/bignumber'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { Swap } from '../typechain/Swap'
import { SampleToken } from '../typechain/SampleToken'
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Swap contract', () => {
  let swap: Swap
  let sampleToken: SampleToken
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress

  beforeEach('deploy', async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    const initialSupply: bigint = BigInt(100_000_000_000_000_000_000)

    const SampleToken = await ethers.getContractFactory('SampleToken')
    sampleToken = (await SampleToken.deploy(initialSupply)) as SampleToken

    const Swap = await ethers.getContractFactory('Swap')
    swap = (await Swap.deploy()) as Swap
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

  it('Test swap', async () => {
    await swap.swapETHForExactTokens(sampleToken.address, 100000 /*, 10, 1000*/)
  })

})
