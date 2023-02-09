import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My notes</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        color: "#181B12"
    }
})
export default memo(Header)