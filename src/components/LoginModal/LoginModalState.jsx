// libraries
import { atom } from 'recoil';

const loginModalState = atom({
  key: 'modalOpen',
  default: false,
});

export default loginModalState;
