import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Colors from '../assets/Colors'

type Props = {}

const NoNotesCard = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No notes found!</Text>
            <Text style={styles.text}>Please add a note ...</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {

    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.redBackground
    }
})
export default memo(NoNotesCard)