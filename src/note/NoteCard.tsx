import { StyleSheet, View } from 'react-native'
import React, { FC, memo } from 'react'
import { Colors } from '..'

import { ActionButton, ClientCard, Divider, NoteHeader } from './'
import { NOTE } from '../types'



type NoteCardProps = {
    item: NOTE;
    deleteHandler: (id: string) => void;
    onEditHandler: (note: NOTE) => void;
}

const NoteCard: FC<NoteCardProps> = ({ item, deleteHandler, onEditHandler }) => {
    const { id, text, client, category, } = item

    return (
        <View style={styles.container}>
            <NoteHeader text={text} />
            <View style={styles.middleView}>
                <ClientCard text={client} icon="account-outline" bg="#dae8b8" />
                <ClientCard text={category} icon="pound" bg={category === "Goal Evidence" ? Colors.greenBackground : category === "Support Coordination" ? Colors.blueBackground : Colors.redBackground} />
            </View>

            <View style={styles.dividerSpacing}>
                <Divider />
            </View>

            <View style={styles.actionButtons}>
                <ActionButton
                    text="Edit note"
                    icon="circle-edit-outline"
                    onPress={() => onEditHandler(item)}
                    bg={Colors.actionGreen} />

                <ActionButton
                    text="Delete note"
                    icon="delete-circle-outline"
                    onPress={() => deleteHandler(id)}
                    bg={Colors.actionRed} />
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.noteBackground,
        borderRadius: 10,
        padding: 15,
    },
    middleView: {
        flexDirection: 'row', alignItems: "center", marginTop: 5
    },
    dividerSpacing: {
        marginVertical: 15
    },
    actionButtons: {
        flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"
    },

})

export default memo(NoteCard)