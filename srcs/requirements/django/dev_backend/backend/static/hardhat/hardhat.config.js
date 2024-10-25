/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config({ path: '/home/dboire/42/T/ft_transcendence/env_test.txt' });
require("@nomiclabs/hardhat-ethers");

const { INFURA_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
    solidity: "0.8.27",
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        sepolia: {
            url: INFURA_API_KEY,
            accounts: [`0x${PRIVATE_KEY}`]  // Add the prefix here
        }
    },
};
