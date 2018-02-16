import EthereumService from '../services/EthereumService'

export const addAccount = (address) => ({type: 'ADD_ACCOUNT', address})
updateBalances = (address, balances) => ({type: 'UPDATE_BALANCES', address, balances})
updateTransactions = (address, transactions) => ({type: 'UPDATE_TRANSACTIONS', address, transactions})

export const addAndPopulateAccount = (address) => (dispatch) => {
    dispatch(addAccount(address))
    return dispatch(requestBalances(address)).then(dispatch(requestTransactions(address)))
}

const requestBalances = (address) => (dispatch) => {
    return EthereumService
        .lookupBalance(address)
        .then(balances => dispatch(updateBalances(address, balances)))
}

const requestTransactions = (address) => (dispatch) => {
    return EthereumService
        .getTransactions(address)
        .then(transactions => dispatch(updateTransactions(address, transactions)))
}