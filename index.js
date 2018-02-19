// react
import React from 'react';
import { AppRegistry, View } from 'react-native';

// redux
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native
import { PersistGate } from 'redux-persist/es/integration/react';

// reducers
import { scannedAddress, accounts, user, slide } from './src/reducers';

// App
import { Spinner } from '@shoutem/ui';
import App from './App';

// Disable annoying debug warnings
console.disableYellowBox = true;

const config = {
	key: 'root',
	storage,
	blacklist: [ 'scannedAddress', 'accounts' ]
};
const reducer = persistCombineReducers(config, { scannedAddress, accounts, slide, user });

function configureStore() {
	const store = createStore(reducer, applyMiddleware(thunk, logger));
	const persistor = persistStore(store);

	return { persistor, store };
}

const ReduxApp = () => {
	const { persistor, store } = configureStore();

	const styles = {
		loadingContainer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%'
		}
	};
	return (
		<Provider store={store}>
			<PersistGate
				loading={
					<View style={styles.loadingContainer}>
						<Spinner />
					</View>
				}
				persistor={persistor}
			>
				<App />
			</PersistGate>
		</Provider>
	);
};

AppRegistry.registerComponent('Globe', () => ReduxApp);
