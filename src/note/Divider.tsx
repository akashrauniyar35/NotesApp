import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Divider = (props: Props) => {
    return (
        <View style={styles.line} />
    )
}

export default Divider

const styles = StyleSheet.create({
    line: {
        flex: 1,
        borderColor: '#5e5e5e',
        borderBottomWidth: 1,
        opacity: .2,
    }
})