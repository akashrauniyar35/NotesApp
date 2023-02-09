import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Colors from '../assets/Colors'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import AddNoteModal from './AddNoteModal';
import { postNewNote } from '../services/AddNoteService';
import { NOTES } from '../types';
import { DATA } from '../utils';


type Props = {
    notes: NOTES;
    fetchAllNotes: () => void;
}


const AddNoteButton = (props: Props) => {
    const { notes, fetchAllNotes } = props;
    const [visible, setVisible] = useState<boolean>(false);
    const [showClients, setShowClients] = useState<boolean>(false)
    const [note, setNote] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedClient, setSelectedClient] = useState<string>("");

    let categotyData = DATA.categories
    let clientData = DATA.clients

    const toggleModal = () => {
        setVisible(!visible)
    }

    //toggle accordian for clients
    const toggleClientsVisible = () => {
        setShowClients(!showClients)
    }

    //onChange to set notes text
    const onNoteChangeHandler = (text: string) => {
        setNote(text)
    }

    //onChange to set notes category
    const onSelectedCategoryHandler = (text: string) => {
        setSelectedCategory(text)
    }

    //onChange to set notes client and toggle accordian to false once set
    const onSelectedClientHandler = (text: string) => {
        setSelectedClient(text);
        toggleClientsVisible()
    }


    //save a note function
    const onSaveNoteHandler = useCallback(() => {
        const newNote = {
            id: new Date().getTime().toString(),
            text: note,
            client: selectedClient,
            category: selectedCategory
        };
        let allNotes = [...notes, newNote];
        postNewNote(allNotes).then(() => {
            fetchAllNotes()
            setVisible(!visible)
            setNote("");
            setSelectedCategory("");
            setSelectedClient("");
        })

    }, [notes])

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={toggleModal}>
                    <IconM name="plus" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <AddNoteModal
                title="Add note"
                clientsVisible={showClients}
                toggleClientsVisible={toggleClientsVisible}
                clientData={clientData}
                categotyData={categotyData}
                visible={visible}
                closeModal={toggleModal}
                value={note}
                onChange={onNoteChangeHandler}
                selectedCategory={selectedCategory}
                selectCategoryHandler={onSelectedCategoryHandler}
                selectedClient={selectedClient}
                selectClientHandler={onSelectedClientHandler}
                onSave={onSaveNoteHandler} />
        </>
    )
}

export default AddNoteButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blueBackground,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 30,
        right: 20,
        zIndex: 1
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        marginRight: 10
    }
})