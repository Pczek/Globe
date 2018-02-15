import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {Text, Caption, Heading, Row, Spinner} from '@shoutem/ui'

export const Account = ({account}) => (
    <View>
        <Caption>{account.address}</Caption>
        {account.balances
            ? <Row>
                    <Text numberOfLines={1}>{`${account.balances.eth} ETH`}</Text>
                </Row>
            : <Spinner/>}

    </View>
)