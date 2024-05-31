import {useRecoilState} from 'recoil';
import userAtom from '../component/atom/userAtom';
import authStorage from '../component/storage/authStorage';
import {useMutation} from 'react-query';
import axios from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';
import httpClient from '../api/httpClient';
import {useCallback} from 'react';

type LoginParam = {
  id: string;
  password: string;
};
const loginApi = async (params: LoginParam) => {
  const response = await axios.post(
    `${Config.API_URL}/authentication/sign-in`,
    params,
  );
  return response.data.response;
};

const useUser = () => {
  const {applyToken, clearToken} = httpClient();
  const [user, setUser] = useRecoilState(userAtom);

  const {mutate: login} = useMutation(loginApi, {
    onSuccess: async data => {
      await authStorage.set('accessToken', data.accessToken);
      setUser(true);
      applyToken(data.accessToken);
    },
    onError: error => {
      console.log(error);
      Alert.alert('오류', '이메일과 비밀번호를 다시 확인해주시기 바랍니다.');
    },
  });

  const logout = useCallback(async () => {
    await authStorage.clear('accessToken');
    clearToken();
    setUser(null);
  }, []);

  return {user, login, logout};
};

export default useUser;

export interface IUser {
  _id: string;
  id: string;
  device_token: string;
  device_type: string;
}
