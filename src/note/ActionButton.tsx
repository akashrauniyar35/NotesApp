import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, memo } from 'react'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


type ActionButtonProps = {
    text: string;
    icon: string;
    bg: string;
    onPress: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({ text, icon, bg, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: bg, borderRadius: 5, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, flex: .45, justifyContent: 'space-between' }}>
            <Text style={styles.text}>{text}</Text>
            <IconM name={icon} size={20} color={"white"} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: "500",
        color: '#fff'
    },
})
export default memo(ActionButton)