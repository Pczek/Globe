import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {RNCamera} from 'react-native-camera'

class Scanner extends Component {
    state = {
        ready: false,
        error: null
    }

    componentDidCatch(error) {
        this._onError(error)
    }

    _onCameraReady = () => {
        this.setState({ready: true})
    }

    _onError = (error) => {
        this.setState({error})
    }

    render() {
        const {active, onBarCodeRead} = this.props
        const {ready, error} = this.state
        console.log(`ready: ${ready}, error: ${error}`)
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                    onBarCodeRead({data: "0x02F024e0882B310c6734703AB9066EdD3a10C6e0"})
                }}>
                    <Text style={{
                        color: '#ffffff'
                    }}>{`ready: ${ready}, error: ${error}`}</Text>
                </TouchableOpacity>
                {active
                    ? <RNCamera
                            ref={ref => {
                            this.camera = ref;
                        }}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            permissionDialogTitle={'Permission to use camera'}
                            permissionDialogMessage={'We need your permission to use your camera phone'}
                            onBarCodeRead={onBarCodeRead}
                            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                            onCameraReady={this._onCameraReady}
                            onMountError={this._onError}/>
                    : null}
            </View>
        )

    }
}
Scanner.propTypes = {
    onBarCodeRead: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
}

export default Scanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    preview: {
        flex: 1,
        maxHeight: "50%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
