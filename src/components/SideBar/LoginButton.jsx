// libraries
import { Button } from '@mui/material';
import { BoxArrowInRight } from 'react-bootstrap-icons';
import { useRecoilState } from 'recoil';
// files
import loginModalState from '../LoginModal/LoginModalState';
// styles
import { FONT_COLOUR } from '../Theme/Colours';

const LoginButton = () => {
  const [, setModalOpen] = useRecoilState(loginModalState);

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#d6d6d6',
        },
        color: FONT_COLOUR.LIGHT,
        fontWeight: 'bold',
        width: 110,
        height: 45,
      }}
      endIcon={<BoxArrowInRight />}
      onClick={() => setModalOpen(true)}
    >
      Log in
    </Button>
  );
};

export default LoginButton;
