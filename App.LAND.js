import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Text, Button, TextInput, Heading } from '@shoutem/ui'
import './global'
import * as ethers from 'ethers'
import {ContractAddress, LANDInterface} from './LAND'
import range from 'lodash/range'
import fill from 'lodash/fill'

export default class App extends Component {

  state = {
    address:undefined,
    balance: undefined,
    provider: null,
  }

  componentDidMount () {
    const provider = new ethers.providers.InfuraProvider('mainnet','tAM9vdqiPLFrZ8F9nzND')
    const contract = new ethers.Contract(ContractAddress, LANDInterface.abi, provider)
    console.log(contract)
    console.log(range)
    const xCords = range(-49,-40)
    const yCords = fill(Array(xCords.length),1)

    contract.ownerOfLandMany(xCords,yCords).then(owners=> console.log(owners))
    const landData = this.collectLandData(xCords,1,contract)
    this.setState({
      provider,
      contract,
      address:"0x02F024e0882B310c6734703AB9066EdD3a10C6e0",
    })
  }

  collectLandData = (xCords, row, contract)=>{
    return xCords.map( async (x)=>{
      const landData = await contract.landData(x,row)
      console.log(landData)
      return landData
    })
  }

  onAddressChange =(newValue) =>{
      this.setState({
        address:newValue
      })
  }

  lookUpBalance = ()=>{
    const {provider, address} = this.state
    if(provider && address){
      provider.getBalance(address).then((balance) =>{

        // balance is a BigNumber (in wei); format is as a sting (in ether)
        const etherString = ethers.utils.formatEther(balance);
        this.setState(
          {balance:ethers.utils.formatEther(balance).toString()}
        )
        console.log("Balance: " + etherString);
      });
    }
  }



  render () {
    const {balance} = this.state
    return (
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.container}>
          <View style={styles.textInput}>
            <TextInput 
            placeholder={'ETH Public Address'} 
            onChangeText={this.onAddressChange}
            />
          </View>
          <View style={styles.button}>
            <Button 
            onPress={this.lookUpBalance}
            styleName='full-width'>
              <Text>
                SEARCH
              </Text>
            </Button>
          </View>
        </View>
        {!balance ? null:
        <View>
            <Heading>
              {balance}
            </Heading>
        </View>
        }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EEEEEE'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  textInput: {
    flex: 2
  },
  button: {
    flex: 1
  }
})
