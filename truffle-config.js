const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        test: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        bsc: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://bsc-dataseed1.binance.org`
                )
            },
            network_id: 56
        },
         mainnet: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`
                )
            },
            network_id: 1,
            confirmations: 10,
            timeoutBlocks: 200,
            networkCheckTimeout: 1000000,
            skipDryRun: true
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`
                )
            },
            network_id: 4,
            confirmations: 10,
            timeoutBlocks: 200,
            networkCheckTimeout: 1000000,
            skipDryRun: true
        },
        kovan: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `wss://kovan.infura.io/ws/v3/${process.env.INFURA_ID}`
                    // `wss://eth-kovan.ws.alchemyapi.io/v2/${process.env.ALCHEMY_ID}`
                )
            },
            network_id: 42,
            confirmations: 10,
            timeoutBlocks: 200,
            networkCheckTimeout: 1000000,
            skipDryRun: true,
            
        },

        
        testnet: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `wss://data-seed-prebsc-1-s1.binance.org:8545`
                )
            },
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            networkCheckTimeout: 1000000,
            skipDryRun: true
        }
    },

      //Ethereum

    mocha: {
    useColors: false,
    reporter: "json"
    },
    compilers: {
        solc: {
            version: "^0.8.3",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },

    plugins: [
        'truffle-plugin-verify',
        "solidity-coverage"
    ],

    api_keys: {
      bscscan: process.env.BSCSCAN_API_KEY,
      etherscan: process.env.ETHERSCAN_API_KEY
    }
};
