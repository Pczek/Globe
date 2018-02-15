import EthereumService from '../services/EthereumService'

export const addAccount = (address) => ({type: 'ADD_ACCOUNT', address})

updateBalance = (address, balances) => ({type: 'UPDATE_BALANCES', address, balances})

export const requestBalance = (address) => {
    // TODO only do request if address is added as an account!
    return (dispatch, getState) => {
        EthereumService
            .lookupBalance(address)
            .then(balances => {
                dispatch(updateBalance(address, balances))
            })
            .catch(error => {
                console.log('something went wrong', error)
            })
    }

}