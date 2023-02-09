import { FlatList, ListRenderItem, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Divider from '../note/Divider';

type ITEM = {
    id: string;
    title: string;
}

interface CLIENTSDATA extends Array<ITEM> { }
type Props = {
    isOpen: boolean;
    onToggle: () => void;
    data: CLIENTSDATA;
    placeholder: string;
    value: string | undefined;
    onPress: (value: string) => void;
}




const Accordian = (props: Props) => {

    const { isOpen, onToggle, data, placeholder, value, onPress } = props;

    const renderItem: ListRenderItem<ITEM> = ({ item }) => {
        const { title } = item
        return (
            <Pressable onPress={() => onPress(title)}>
                <Text style={styles.listText}>{title}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable onPress={onToggle}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Icon name={"person"} size={16} color={"#181B12"} />
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.placeholder}>{value ? value : placeholder}</Text>
                    <View style={styles.icon}>
                        <Icon name={isOpen ? "chevron-up" : "chevron-down"} color="#181B12" size={20} />
                    </View>
                </View>

                {isOpen && <FlatList
                    data={data}
                    contentContainerStyle={styles.flatListContainer}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => (
                        <View style={styles.flatListContainer}>
                            <Divider />
                        </View>
                    )}
                />
                }

            </View>

        </Pressable >
    )
}
export default Accordian

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        borderColor: "#181B12",
        padding: 10,
        borderRadius: 5,
    },
    icon: {
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    placeholder: {
        marginLeft: 5,
        fontSize: 14,
        color: "#181B12",
        width: '80%'
    },
    flatListContainer: {
        marginVertical: 10
    },
    listText: {
        fontSize: 12,
        color: "#181B12",
    }
})
