import * as ethers from 'ethers'

class EthereumService {
    constructor() {
        this.provider = new ethers
            .providers
            .InfuraProvider('mainnet', 'tAM9vdqiPLFrZ8F9nzND')
    }

    lookupBalance(address) {
        if (this.provider && address) {
            return new Promise((resolve, reject) => {
                this
                    .provider
                    .getBalance(address)
                    .then((balance) => {
                        resolve({
                            eth: ethers
                                .utils
                                .formatEther(balance)
                                .toString()
                        })
                    })
                    .catch(reject);
            })
        }
        return undefined
    }
}

export default new EthereumService()