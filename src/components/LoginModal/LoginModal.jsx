// libraries
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Checkbox,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Ring } from '@uiball/loaders';
import { PersonCircle, KeyFill } from 'react-bootstrap-icons';
import axios from 'axios';
// files
import loginModalState from './LoginModalState';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 2,
  borderRadius: 0.8,
};

const LoginModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(loginModalState);
  const [remainLoggedChecked, setRemainLoggedChecked] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const handleClose = () => setModalOpen(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleLogin = (response) => {
    if (response.status === 200) {
      localStorage.setItem('userName', response.data.user_name);
      localStorage.setItem('userRole', response.data.user_role);
      localStorage.setItem('remainLoggedIn', remainLoggedChecked);
      setLoginLoading(false);
      window.location.reload(false);
    }
  };

  const handleFailedLogin = (error) => {
    console.log(error);
    if ((error.response.status === 400) & (error.response.statusText === 'Bad Request')) {
      setError('password', {
        types: {
          failedAuth: 'Incorrect username or password',
        },
      });
    }
    if ((error.response.status === 500) & (error.response.statusText === 'Internal Server Error')) {
      setError('password', {
        types: {
          failedAuth: 'Incorrect username or password',
        },
      });
    }
    setLoginLoading(false);
  };

  const authenticateCall = (formData) => {
    try {
      axios
        .post(
          `http://localhost:5134/api/Login?queriedUsername=${formData.username}&queriedPassword=${formData.password}`,
        )
        .then((response) => handleLogin(response))
        .catch((error) => handleFailedLogin(error));
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    setLoginLoading(true);
    authenticateCall(data);
  };

  const handleRemainLoggedCheck = () => {
    setRemainLoggedChecked(!remainLoggedChecked);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box sx={style}>
        <Typography className="text-center" style={{ fontSize: '25px' }}>
          Login
        </Typography>

        <form className="grid grid-cols-1 justify-items-center gap-3 mt-[15px]">
          <Stack>
            <TextField
              label="Username"
              variant="outlined"
              placeholder="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonCircle />
                  </InputAdornment>
                ),
              }}
              {...register('username', { required: true })}
            />
            {errors.username?.type === 'required' && (
              <p className="text-red">Username is required</p>
            )}
          </Stack>
          <Stack>
            <TextField
              label="Password"
              variant="outlined"
              placeholder="Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyFill />
                  </InputAdornment>
                ),
              }}
              {...register('password', { required: true })}
            />
            {errors.password?.type === 'required' && (
              <p className="text-red">Password is required</p>
            )}
            {errors.password && errors.password.types && <p>{errors.password.types.failedAuth}</p>}
          </Stack>
          <Stack className="flex flex-row">
            <Checkbox checked={remainLoggedChecked} onChange={handleRemainLoggedCheck} />
            <p className="my-auto">Stay logged in</p>
          </Stack>
          <Button
            variant="contained"
            className="mx-auto"
            sx={{
              backgroundColor: '#0d90d6',
              '&:hover': {
                backgroundColor: '#0c86c7',
              },
              color: 'white',
              fontWeight: 'bold',
              width: 110,
              height: 45,
            }}
            disabled={loginLoading}
            onClick={handleSubmit(onSubmit)}
          >
            {loginLoading ? <Ring size={40} lineWeight={5} speed={2} color="#82a1b3" /> : `Log in`}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
