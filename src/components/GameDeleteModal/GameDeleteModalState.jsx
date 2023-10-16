// libraries
import { atom } from 'recoil';

const deleteGameModalState = atom({
  key: 'deleteModalOpen',
  default: false,
});

export const gameToDelete = atom({
  key: 'gameId',
  default: null,
});

export default deleteGameModalState;
