import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('StoreData', value);
  } catch (error) {
    console.log('Error StoreData localstorage = ', error);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log('GetData', jsonValue);
  } catch (error) {
    console.log('Error getData localstorage = ', error);
  }
};
