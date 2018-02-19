import * as ethers from 'ethers'
import Axios from 'axios'

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

    getTransactions(address) {
        if (address) {
            return new Promise((resolve, reject) => {
                Axios
                    .get('https://api.etherscan.io/api', {
                    params: {
                        module: 'account',
                        action: 'txlist',
                        address: address,
                        startblock: 0,
                        endblock: 99999999,
                        sort: 'desc',
                        apikey: 'P71H6Z4G77XUE26A7KUSWPCR3GY4HPY9ZZ'
                    }
                })
                    .then(response => {
                        let {result} = response.data
                        result = result.map(tx => ({
                            ...tx,
                            value: ethers
                                .utils
                                .formatEther(tx.value)
                                .toString()
                        }))
                        resolve(result)
                    })
            })
        }
        return Promise.resolve()

    }
}

export default new EthereumService()