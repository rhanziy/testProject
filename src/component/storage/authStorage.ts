import AsyncStorage from '@react-native-async-storage/async-storage';

const authStorage = {
  async get(key: string) {
    const data = await AsyncStorage.getItem(key);
    if (!data) {
      return null;
    }
    return data;
  },
  async set(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  },
  async clear(key: string) {
    await AsyncStorage.removeItem(key);
  },
};

export default authStorage;
