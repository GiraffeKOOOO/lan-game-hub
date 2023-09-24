// libraries
import { Button } from '@mui/material';
import { BoxArrowLeft } from 'react-bootstrap-icons';
// styles
import { FONT_COLOUR } from '../Theme/Colours';

const handleLogout = () => {
  // TODO : clear the user session here and redirect to login
  console.log(`log out functions here`);
};

const LogoutButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#9c27b0',
        '&:hover': {
          backgroundColor: '#882299',
        },
        color: FONT_COLOUR.DARK,
        fontWeight: 'bold',
        width: 130,
        height: 45,
      }}
      startIcon={<BoxArrowLeft />}
      onClick={() => handleLogout()}
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
