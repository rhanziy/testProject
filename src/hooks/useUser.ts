import {atom, useRecoilState} from 'recoil';

const userAtom = atom<IUser | null>({
  key: 'userAtom',
  default: null,
});

const useUser = () => {
  const [user, _setUser] = useRecoilState(userAtom);

  return user;
};

export default useUser;

export interface IUser {
  _id: string;
  id: string;
  device_token: string;
  device_type: string;
}
