
require("@nomicfoundation/hardhat-toolbox");



module.exports = {
        networks: {
                hardhat: {
                localhost: {
                        url: "https://ec2-54-212-134-144.us-west-2.compute.amazonaws.com:8545",
                        accounts: ["de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"]
,                       chainId: 31337
        
                }
,
                        forking: {
                                url: "https://cloudflare-eth.com/"
                    ,   chainId: 31337
			}

                }
   },

        solidity: "0.8.10",
};

