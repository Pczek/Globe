import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { Caption, Text } from '@shoutem/ui';
import Scanner from './src/components/Scanner';
import AddressDetailed from './src/components/AddressDetailed';

class App extends Component {
	static defaultProps = {
		accounts: []
	};

	state = {
		cameraActive: false
	};

	onIndexChanged = (index) => {
		this.setState({
			cameraActive: index === 0
		});
	};

	_onSave = () => {
		this.swiper.scrollBy(1);
	};

	renderAccounts = (accounts) =>
		accounts.length > 0 ? (
			<View style={styles.centerThatShit}>
				{accounts.map((acc) => <Caption styleName="h-center">{acc.address}</Caption>)}
			</View>
		) : (
			<View style={styles.centerThatShit}>
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
					{[ <Scanner active={cameraActive} onSave={this._onSave} />, this.renderAccounts(accounts) ]}
				</Swiper>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => ({
	accounts: state.accounts
});
export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: '#F2F2F2'
	},
	centerThatShit: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
