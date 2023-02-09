import { FlatList, ListRenderItem, Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, } from 'react';

import { ModalHeader, Lable, Accordian, SaveButton, CategotyCard } from './'
import { ADD_NOTE_MODAL_PROPS, ITEM } from '../types';


const AddNoteModal: FC<ADD_NOTE_MODAL_PROPS> = ({
    clientsVisible, toggleClientsVisible, onSave, categotyData, clientData, visible, closeModal, value, onChange, placeHolder, selectCategoryHandler, selectedCategory, selectClientHandler, selectedClient, title }) => {


    const renderItem: ListRenderItem<ITEM> = ({ item }) => {
        const { title } = item
        return (
            <CategotyCard title={title} onPress={selectCategoryHandler} value={selectedCategory} />
        )
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={closeModal}>
                <SafeAreaView />
                <View style={styles.modalView}>
                    <ModalHeader onPress={closeModal} title={title}/>
                    <View style={styles.padding}>

                        <View>
                            <TextInput multiline value={value} placeholderTextColor="#181B12" placeholder={placeHolder ? placeHolder : 'Type here ...'} style={styles.input} maxLength={200} onChangeText={onChange} />
                            <Text style={styles.textLimit}>{`${value?.length}/200`}</Text>
                        </View>

                        <View style={styles.category}>
                            <Lable icon="pound" lable="category" />
                            <FlatList
                                data={categotyData}
                                contentContainerStyle={styles.flatListContainerStyle}
                                columnWrapperStyle={{ marginBottom: 10 }}
                                numColumns={2}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                            />
                        </View>

                        <View>
                            <Accordian
                                value={selectedClient}
                                onPress={selectClientHandler}
                                placeholder="Select a client"
                                isOpen={clientsVisible}
                                onToggle={toggleClientsVisible} data={clientData} />
                        </View>

                        <View style={styles.category}>
                            <SaveButton onPress={onSave} />
                        </View>

                    </View>
                </View>
            </Modal>

        </>
    )
}

const styles = StyleSheet.create({

    modalView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    padding: {
        padding: 20
    },
    input: {
        backgroundColor: '#fff',
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .1,
        elevation: 2,
        color: "#181B12",
        shadowColor: '#1e1e1e',
        padding: 10,
        fontSize: 14,
        textAlignVertical: "top",
        textAlign: "left",
        height: 100,
        borderRadius: 5,
    },
    textLimit: { position: 'absolute', bottom: 5, right: 5, fontSize: 10, color: '#181B12', },
    category: {
        marginTop: 20,
    },
    flatListContainerStyle: {
        marginVertical: 10
    },


});

export default AddNoteModal
