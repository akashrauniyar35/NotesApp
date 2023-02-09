import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

type Props = {
    text: string
}

const NoteHeader = (props: Props) => {
    const { text } = props;
    return (
        <Text style={styles.text}>{text}</Text>
    )
}


const styles = StyleSheet.create({
    text: {
        color: '#181B12',
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'left'
    },
})
export default memo(NoteHeader)