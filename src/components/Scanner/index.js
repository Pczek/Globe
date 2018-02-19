import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Dimensions, Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Heading } from '@shoutem/ui';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import ScannedAddressModal from '../ScannedAddressModal';
import { addressScanned } from '../../actions';

class Scanner extends Component {
	state = {
		ready: false,
		error: null,
		modalVisible: false
	};

	componentDidCatch(error) {
		this._onError(error);
	}

	_onCameraReady = () => {
		this.setState({ ready: true });
	};

	_onError = (error) => {
		this.setState({ error });
	};

	closeModal = () => {
		this.setState({ modalVisible: false });
	};

	onBarCodeRead = ({ data }) => {
		this.setState({ modalVisible: true });
		this.props.addressScanned(data);
	};

	render() {
		const { active, onSave, scannedAddress } = this.props;
		const { ready, error, modalVisible } = this.state;

		return (
			<View style={styles.container}>
				<ScannedAddressModal
					visible={modalVisible}
					address={scannedAddress || {}}
					onRequestClose={this.closeModal}
					onRequestSave={() => {
						this.closeModal();
						onSave();
					}}
				/>

				<TouchableOpacity
					onPress={() => {
						this.onBarCodeRead({ data: '0x02F024e0882B310c6734703AB9066EdD3a10C6e0' });
					}}
				>
					<Heading>Scan an Ethereum Address</Heading>
				</TouchableOpacity>
				{active && !modalVisible ? (
					<RNCamera
						ref={(ref) => {
							this.camera = ref;
						}}
						style={styles.preview}
						type={RNCamera.Constants.Type.back}
						flashMode={RNCamera.Constants.FlashMode.on}
						permissionDialogTitle={'Permission to use camera'}
						permissionDialogMessage={'We need your permission to use your camera phone'}
						onBarCodeRead={this.onBarCodeRead}
						barCodeTypes={[ RNCamera.Constants.BarCodeType.qr ]}
						onCameraReady={this._onCameraReady}
						onMountError={this._onError}
					/>
				) : null}
			</View>
		);
	}
}

Scanner.propTypes = {
	onSave: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
	scannedAddress: state.scannedAddress
});
export default connect(mapStateToProps, { addressScanned })(Scanner);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	preview: {
		flex: 1,
		maxHeight: '50%',
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
});
