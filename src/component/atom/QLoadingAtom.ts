import {atom} from 'recoil';

const QLoadingAtom = atom<boolean>({
  key: 'QLoadingAtom',
  default: false,
});

export default QLoadingAtom;
