import {atom} from 'recoil';

const userAtom = atom<boolean | null>({
  key: 'userAtom',
  default: null,
});

export default userAtom;
