import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { Text, Button, TextInput, Heading, Row } from '@shoutem/ui';

import Scanner from './src/components/Scanner';
import { Account } from './src/components/Account';
import { AddressDetailed } from './src/components/AddressDetailed';
import { addAndPopulateAccount } from './src/actions';

class App extends Component {
	state = {
		cameraActive: false
	};

	onIndexChanged = (index) => {
		this.setState({
			cameraActive: index === 0
		});
	};

	_qrCodeScanned = (qrCode) => {
		this.props.addAndPopulateAccount(qrCode.data);

		this.swiper.scrollBy(1);
	};

	renderAccounts = (accounts) =>
		accounts.length > 0 ? (
			<View>
				<AddressDetailed account={accounts[0]} />
			</View>
		) : (
			<View>
				<Text>Swipe Left to Add an Ethereum Account</Text>
			</View>
		);

	render() {
		const { cameraActive } = this.state;
		const { accounts } = this.props;
		return (
			<SafeAreaView style={styles.appContainer}>
				<Swiper
					index={1}
					loop={false}
					showsPagination={false}
					ref={(swiper) => (this.swiper = swiper)}
					onIndexChanged={this.onIndexChanged}
				>
					{[
						<Scanner active={cameraActive} onBarCodeRead={this._qrCodeScanned} />,
						this.renderAccounts(accounts)
					]}
				</Swiper>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => ({
	accounts: state.accounts
});
export default connect(mapStateToProps, {
	addAndPopulateAccount
})(App);

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: '#F2F2F2'
	},
	container: {
		flex: 1
	},
	textInput: {
		flex: 2
	},
	button: {
		flex: 1
	}
});
