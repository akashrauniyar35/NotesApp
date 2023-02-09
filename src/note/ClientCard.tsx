import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

type ClientCardProps = {
    text: string;
    icon: string;
    bg: string

}

const ClientCard: FC<ClientCardProps> = ({ icon, text, bg }) => {
    return (
        <View style={styles.flexView}>
            <View style={[styles.client, { backgroundColor: bg }]}>
                <IconM name={icon} size={icon === "pound" ? 12 : 14} color={icon === "pound" ? "#fff" : "#181B12"} />
                <Text ellipsizeMode='tail' numberOfLines={1} style={[styles.text, { color: icon === "pound" ? "#fff" : "#181B12" }]}>{text}</Text>
            </View>
        </View>
    )
}

export default ClientCard

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 5,
        width: 80 
    },
    flexView: {
        flexDirection: 'row',
        marginRight: 15
    },
    client: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
})