import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Card, Screen, Title, Caption, Heading, Subtitle, Row, Spinner, ListView, Divider } from '@shoutem/ui';
import { utils } from 'ethers';

export const AddressDetailed = ({ account }) => {
	const { address, balances, transactions } = account;

	const renderTransaction = (transaction) => (
		<View>
			<Row>
				<Icon name={address === transaction.to ? 'left-arrow' : 'right-arrow'} />
				<View style={{ display: 'flex', flexDirection: 'column' }}>
					<Subtitle>{`${utils.etherSymbol} ${transaction.value}`}</Subtitle>
					<Text>{new Date(transaction.timeStamp * 1000).toLocaleString()}</Text>
				</View>
			</Row>
			<Divider styleName="line" />
		</View>
	);

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.infoCard}>
					{balances ? (
						<Heading styleName="h-center">{`${utils.etherSymbol} ${balances.eth}`}</Heading>
					) : (
						<Spinner />
					)}
					<Caption styleName="h-center">{address}</Caption>
				</View>
			</View>
			<View style={styles.bottom}>
				<Title>Transactions</Title>
				<ListView
					loading={transactions === undefined}
					data={transactions || []}
					renderRow={renderTransaction}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		// height: '100%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#F2F2F2'
	},
	top: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoCard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '50%',
		backgroundColor: '#ffffff'
	},
	bottom: {
		flex: 2
		// height: '100%'
	},
	inText: {
		color: '#AFDB8C'
	},
	outText: {
		color: '#D88594'
	}
});
