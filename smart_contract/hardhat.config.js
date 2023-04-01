//https://eth-mainnet.g.alchemy.com/v2/G_iMxmsUb9VH7aAKFfl95IULmZxSdrWz

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    ETH_MAINNET: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/G_iMxmsUb9VH7aAKFfl95IULmZxSdrWz', accounts: [ 'd37aea2cc8009eac2ef22e47173778ba20cc68c2a7b7e16faed01546f7b87667' ]
    }
  }
}