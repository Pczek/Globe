import React, { Component } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text, Button, Icon, Divider } from '@shoutem/ui';
import { AddressDetailed } from '../AddressDetailed';
import { saveScannedAddress } from '../../actions';

class ScannedAddressModal extends Component {
	static propTypes = {};

	onSave = () => {
		this.props.saveScannedAddress(this.props.address);
		this.props.onRequestSave();
	};

	render() {
		const { visible, address, onRequestClose } = this.props;
		return (
			<Modal visible={visible} animationType={'slide'} transparent onRequestClose={onRequestClose}>
				<View style={styles.modalContainer}>
					<View style={styles.innerContainer}>
						<AddressDetailed account={address} />
						<Divider styleName="line" />
						<View style={styles.actionContainer}>
							<Button onPress={onRequestClose} styleName="full-width">
								<Text>CLOSE</Text>
							</Button>
							<Button onPress={this.onSave} styleName="full-width">
								<Text>ADD</Text>
							</Button>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}
export default connect(null, { saveScannedAddress })(ScannedAddressModal);

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey'
	},
	innerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: 16,
		height: '100%',
		width: '100%'
	},
	actionContainer: {
		display: 'flex',
		flexDirection: 'row'
	}
});
