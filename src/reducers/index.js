export const user = (state = {
    newUser: true
}, action) => {
    switch (action.type) {
        case 'DISMISS_WELCOME_MESSAGE':
            return {
                ...state,
                newUser: false
            }
        default:
            return state
    }
}

export const slide = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return action.newSlide
        default:
            return state
    }
}

export const accounts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            // only add new accounts
            if (state.findIndex(acc => acc.address === action.address) === -1) {
                return [
                    account({}, action), ...state
                ].filter(account => !!account)
            }
            return state
        case 'UPDATE_BALANCES':
        case 'UPDATE_TRANSACTIONS':
            const accountIndex = state.findIndex(acc => acc.address === action.address)
            
            if (accountIndex !== -1) {
                const updatedAccount = account(state[accountIndex], action)
                state.splice(accountIndex,1) // remove old account
                return [...state, updatedAccount] 
            }
            return state
        default:
            return state
    }
}

export const account = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return {address: action.address}
        case 'UPDATE_BALANCES':
            return {
                ...state,
                balances: action.balances
            }
        case 'UPDATE_TRANSACTIONS':
            return {
                ...state,
                transactions: action.transactions
            }
        default:
            return state
    }
}