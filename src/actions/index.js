import EthereumService from '../services/EthereumService';

addAccount = (address) => ({ type: 'ADD_ACCOUNT', address });
updateBalances = (address, balances) => ({ type: 'UPDATE_BALANCES', address, balances });
updateTransactions = (address, transactions) => ({ type: 'UPDATE_TRANSACTIONS', address, transactions });

export const saveScannedAddress = (scannedAddress) => ({ type: 'SAVE_SCANNED_ADDRESS', scannedAddress });

export const addressScanned = (address) => async (dispatch) => {
	dispatch({ type: 'ADDRESS_SCANNED', address });

	const balances = await EthereumService.lookupBalance(address);
	dispatch(updateBalances(address, balances));

	const transactions = await EthereumService.getTransactions(address);
	dispatch(updateTransactions(address, transactions));
};
