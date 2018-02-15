import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View} from 'react-native'
import {RNCamera} from 'react-native-camera'

class Scanner extends Component {
    render() {
        const {active, onBarCodeRead} = this.props

        return active
            ? (
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                        this.camera = ref;
                    }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onBarCodeRead={onBarCodeRead}
                        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}/>
                </View>
            )
            : null
    }
}
Scanner.propTypes = {
    onBarCodeRead: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
}

export default Scanner

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
