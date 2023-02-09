import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddNoteButton, AddNoteModal, Header, NoNotesCard } from './src';
import { postNewNote } from './src/services/AddNoteService';
import { NOTE, NOTES } from './src/types';
import { NoteCard } from './src/note';
import { DATA } from './src/utils';

const App = () => {
  const [allNotesData, setAllNotesData] = useState<NOTES>([]);
  const [showClients, setShowClients] = useState<boolean>(false)
  const [selectedNote, setSelectedNote] = useState<NOTE | undefined>();
  const [updatedText, setUpdatedText] = useState<string>("");
  const [updatedClient, setUpdatedClient] = useState<string>("");
  const [updatedCategory, setUpdatedCategory] = useState<string>("")

  //getitng client and categories data from JSON file
  let categotyData = DATA.categories
  let clientData = DATA.clients


  //fetchnig previously saved notes
  const fetchAllNotes = async () => {
    try {
      const value = await AsyncStorage.getItem('allNotes')
      if (value !== null) {
        setAllNotesData(JSON.parse(value))
      } else {
        console.log("there is no notes previously stored")
      }
    } catch (e) {
      console.log("e")
    }
  }

  //delete a note function
  const deleteNoteHandler = useCallback((id: string) => {
    let updatedNotes = allNotesData.filter((item: NOTE) => item.id !== id)
    postNewNote(updatedNotes)
  }, [allNotesData])


  //edit note
  const editNoteHandler = useCallback(() => {
    let updatedNotes = allNotesData.map((item: NOTE) => {
      if (item.id === selectedNote?.id) {
        item.text = updatedText ? updatedText : item.text;
        item.client = updatedClient ? updatedClient : item.client;
        item.category = updatedCategory ? updatedCategory : item.category;
      } return item
    });
    postNewNote(updatedNotes).then(() => {
      setSelectedNote(undefined)
      setUpdatedText("")
      setUpdatedCategory("")
      setUpdatedClient("")
    })
  }, [selectedNote, updatedText, updatedClient, updatedCategory])

  //render function for flatlist, renders notes card
  const renderItem: ListRenderItem<NOTE> = ({ item }) => {
    return (
      <NoteCard item={item} deleteHandler={deleteNoteHandler} onEditHandler={(item) => setSelectedNote(item)} />
    )
  }

  useEffect(() => {
    fetchAllNotes();
  }, [allNotesData])

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <Header />
        {/* When user first launches the app or notes array length is 0, no notes will appear on the screen */}
        {allNotesData.length <= 0 && <NoNotesCard />}

        <FlatList
          data={allNotesData}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (<View style={{ marginVertical: 10 }} />)}
          renderItem={renderItem}
        />
        {/* Add new note button which triggers a modal */}
        <AddNoteButton notes={allNotesData} fetchAllNotes={fetchAllNotes} />
      </View>

      {/* Edit note modal */}
      <AddNoteModal
        title="Edit note"
        visible={selectedNote ? true : false}
        clientsVisible={showClients}
        toggleClientsVisible={() => setShowClients(!showClients)}
        clientData={clientData}
        categotyData={categotyData}
        closeModal={() => setSelectedNote(undefined)}
        placeHolder={selectedNote?.text}
        value={updatedText}
        selectedCategory={updatedCategory ? updatedCategory : selectedNote?.category}
        selectedClient={updatedClient ? updatedClient : selectedNote?.client}
        onChange={(text) => setUpdatedText(text)}
        selectCategoryHandler={(text) => setUpdatedCategory(text)}
        selectClientHandler={(text) => { setUpdatedClient(text), setShowClients(false) }}
        onSave={editNoteHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
  },
  safeArea: {
    backgroundColor: '#2e2e2e',
  }
});

export default App;
