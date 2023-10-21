// libraries
import { atom } from 'recoil';

const editGameModalState = atom({
  key: 'editModalOpen',
  default: false,
});

export const gameToEdit = atom({
  key: 'gameToEditId',
  default: {},
});

export default editGameModalState;
