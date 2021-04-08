/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import 'hardhat-typechain'
 import '@nomiclabs/hardhat-ethers'
 import '@nomiclabs/hardhat-waffle'

 const MNEMONIC: string = 'tragic square news business dad cricket nurse athlete tide split about ring'
 
module.exports = {
  solidity: '0.7.3',
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/b2daf36eb4d74aed8ffac330c09dd2ee',
      accounts: {mnemonic: MNEMONIC}
    }
  }
};
