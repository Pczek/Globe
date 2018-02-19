import EthereumService from '../services/EthereumService'

export const addAccount = (address) => ({type: 'ADD_ACCOUNT', address})
updateBalances = (address, balances) => ({type: 'UPDATE_BALANCES', address, balances})
updateTransactions = (address, transactions) => ({type: 'UPDATE_TRANSACTIONS', address, transactions})

export const addAndPopulateAccount = (address) => async(dispatch) => {
    dispatch(addAccount(address))

    const balances = await EthereumService.lookupBalance(address)
    dispatch(updateBalances(address, balances))

    const transactions = await EthereumService.getTransactions(address)
    dispatch(updateTransactions(address, transactions))
}