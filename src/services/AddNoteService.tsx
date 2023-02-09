import AsyncStorage from '@react-native-async-storage/async-storage';
import { NOTES } from '../types';


export const postNewNote = async (array: NOTES) => {
    console.log("array api", array)
    try {
        await AsyncStorage.setItem('allNotes', JSON.stringify(array))
    } catch (e) {
        console.log('async storage error', e)
    }
};
