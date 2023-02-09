import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    icon: string;
    lable: string;
}

const Lable = (props: Props) => {
    const { icon, lable } = props;
    return (
        <View style={styles.container}>
            <IconM name={icon} size={18} color={"#181B12"} />
            <Text style={styles.text}>{`Select a ${lable}`}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        marginLeft: 10,
        color: "#181B12"
    }
})

export default Lable
