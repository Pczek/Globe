import React, {Component} from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'
import {connect} from 'react-redux'
import Swiper from 'react-native-swiper';
import {Text, Button, TextInput, Heading, Row} from '@shoutem/ui'

import Scanner from './src/components/Scanner'
import {Account} from './src/components/Account'
import {addAccount, requestBalance} from './src/actions'

class App extends Component {
  state = {
    cameraActive: false
  }

  onIndexChanged = (index) => {
    this.setState({
      cameraActive: index === 0
    })
  }

  _qrCodeScanned = (qrCode) => {
    const address = qrCode.data
    this
      .props
      .addAccount(qrCode.data)

    this
      .props
      .requestBalance(address)

    this
      .swiper
      .scrollBy(1)
  }

  renderAccounts = (accounts) => (
    <View>
      {accounts.map(account => (<Account account={account}/>))}
    </View>
  )

  render() {
    const {cameraActive} = this.state
    const {accounts} = this.props
    return (
      <SafeAreaView style={styles.appContainer}>
        <Swiper
          index={1}
          loop={false}
          showsPagination={false}
          ref={swiper => this.swiper = swiper}
          onIndexChanged={this.onIndexChanged}>
          {[
            (<Scanner active={cameraActive} onBarCodeRead={this._qrCodeScanned}/>), this.renderAccounts(accounts)
          ]}
        </Swiper>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({accounts: state.accounts})
export default connect(mapStateToProps, {addAccount, requestBalance})(App)

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
