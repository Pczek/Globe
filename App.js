import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'
import {Text, Button, TextInput, Heading, Row} from '@shoutem/ui'
import * as ethers from 'ethers'
import Swiper from 'react-native-swiper';
import Scanner from './src/components/Scanner'

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

  renderBalances = (balance) => (
    <View>
      <Heading>Balance</Heading>
      <Row>
        <Text numberOfLines={1}>{`${balance} ETH`}</Text>
      </Row>
      <Row>
        <Text numberOfLines={1}>{`0 MANA`}</Text>
      </Row>
    </View>
  )

  render() {
    const {balance} = this.state
    return (
      <SafeAreaView style={styles.appContainer}>
        <Swiper
          loop={false}
          showsPagination={false}
          ref={swiper => this.swiper = swiper}>
          {[
            this.renderBalances(balance),
            (<Scanner onBarCodeRead={this._qrCodeScanned}/>)
          ]}
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
  }
})
