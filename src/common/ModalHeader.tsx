import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    onPress: () => void;
    title: string
}

const ModalHeader = (props: Props) => {
    const { onPress, title } = props
    return (
        <View style={styles.container}>
            <View style={{ zIndex: 1 }}>
                <Pressable onPress={onPress}>
                    <Icon name="chevron-back" color="black" size={20} />
                </Pressable>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingVertical: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .2,
        elevation: 2,
        shadowColor: "#1e1e1e"
    },
    center: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    text: {
        fontSize: 14,
        color: "#181B12",
    }
})
export default memo(ModalHeader)