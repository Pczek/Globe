import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'
import {Text, Button, TextInput, Heading, Row} from '@shoutem/ui'
import * as ethers from 'ethers'
import Swiper from 'react-native-swiper';
import { RNCamera } from 'react-native-camera';

export default class App extends Component {

  state = {
    address: undefined,
    balance: 0,
    provider: null
  }

  componentDidMount() {
    const provider = new ethers
      .providers
      .InfuraProvider('mainnet', 'tAM9vdqiPLFrZ8F9nzND')
    this.setState({provider, address: "0x02F024e0882B310c6734703AB9066EdD3a10C6e0"})
  }

  onAddressChange = (newValue) => {
    this.setState({address: newValue})
  }

  lookUpBalance = () => {
    const {provider, address} = this.state
    if (provider && address) {
      provider
        .getBalance(address)
        .then((balance) => {

          // balance is a BigNumber (in wei); format is as a sting (in ether)
          const etherString = ethers
            .utils
            .formatEther(balance);
          this.setState({
            balance: ethers
              .utils
              .formatEther(balance)
              .toString()
          })
          console.log("Balance: " + etherString);
        });
    }
  }

  _qrCodeScanned = (qrCode) => {
    this.setState({
      address: qrCode.data
    }, this.lookUpBalance)
    this
      .swiper
      .scrollBy(-1)
  }

  render() {
    const {balance} = this.state
    return (
      <SafeAreaView style={styles.appContainer}>
        <Swiper
          loop={false}
          showsPagination={false}
          ref={swiper => this.swiper = swiper}>
          <View>
            <Heading>Balance</Heading>
            <Row>
              <Text numberOfLines={1}>{`${balance} ETH`}</Text>
            </Row>
            <Row>
              <Text numberOfLines={1}>{`${balance} MANA`}</Text>
            </Row>
          </View>

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
              onBarCodeRead={this._qrCodeScanned}
              barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
              />
          </View>
        </Swiper>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  container: {
    flex: 1
  },
  textInput: {
    flex: 2
  },
  button: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
