// libraries
import { Button } from '@mui/material';
import { BoxArrowInRight } from 'react-bootstrap-icons';
// styles
import { FONT_COLOUR } from '../Theme/Colours';

const loginFunction = () => {
  // TODO : open the login modal here
  console.log(`open login modal here`);
};

const LoginButton = () => {
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
      onClick={() => loginFunction()}
    >
      Log in
    </Button>
  );
};

export default LoginButton;
