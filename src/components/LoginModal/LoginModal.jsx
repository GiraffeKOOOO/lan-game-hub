// libraries
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useRecoilState } from 'recoil';
// files
import loginModalState from './LoginModalState';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  p: 2,
};

const LoginModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(loginModalState);
  const handleClose = () => setModalOpen(false);

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box sx={style}>
        <p>log in modal</p>
      </Box>
    </Modal>
  );
};

export default LoginModal;
