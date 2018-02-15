// react
import React from 'react'
import {AppRegistry, Text, View} from 'react-native'

// redux
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {persistStore, persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import {PersistGate} from 'redux-persist/es/integration/react'

// reducers
import {slide, user} from './src/reducers'

// App
import App from './App'

// Disable annoying debug warnings
console.disableYellowBox = true

const config = {
    key: 'root',
    storage
}
const reducer = persistCombineReducers(config, {slide, user})

function configureStore() {
    const store = createStore(reducer, applyMiddleware(logger))
    const persistor = persistStore(store)

    return {persistor, store}
}

const ReduxApp = () => {
    const {persistor, store} = configureStore()

    const styles = {
        loadingContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: 'center'
        }
    }
    return (
        <Provider store={store}>
            <PersistGate
                loading={(
                <View style={styles.loadingContainer}>
                    <Text>Loading ...</Text>
                </View>
            )}
                persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>

    )
}

AppRegistry.registerComponent('Globe', () => ReduxApp)
