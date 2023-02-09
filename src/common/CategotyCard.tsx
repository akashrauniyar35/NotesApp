import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    title: string;
    onPress: (text: string) => void;
    value: string | undefined;
}

const CategotyCard = (props: Props) => {
    const { title, onPress, value } = props
    return (
        <TouchableOpacity onPress={() => onPress(title)}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <IconM name={value === title ? "check-circle-outline" : "close-circle-outline"} size={20} color="#181B12" style={{ opacity: .7 }} />
            </View>
        </TouchableOpacity>
    )
}
export default CategotyCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        padding: 5,
        paddingHorizontal: 10,
        marginRight: 20,
        borderRadius: 5,

    },
    text: {
        fontSize: 12,
        marginRight: 5,
        color: '#181B12'
    }
})