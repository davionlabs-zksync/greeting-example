require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
import "dotenv/config"

module.exports = {
  zksolc: {
    version: "0.1.0",
    compilerSource: "docker",
    settings: {
      optimizer: {
        enabled: true,
      },
      experimental: {
        dockerImage: "matterlabs/zksolc",
      },
    },
  },
  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    // ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
    ethNetwork: "https://eth-goerli.alchemyapi.io/v2/-qZ8NcwdvM8gsbxWyFl_Iw9znBN5UV3t"
  },
  networks: {
    hardhat: {
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.10",
  },
};