// libraries
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { Box, Button, InputAdornment, Modal, Stack, TextField, Typography } from '@mui/material';
import { Ring } from '@uiball/loaders';
import { PersonCircle, KeyFill } from 'react-bootstrap-icons';
import axios from 'axios';
// files
import loginModalState from './LoginModalState';
import westlanLogo from '../../assets/westlan-logo.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  p: 2,
  borderRadius: 0.8,
};

const LoginModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(loginModalState);
  const [loginLoading, setLoginLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const handleClose = () => setModalOpen(false);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm();

  const handleLogin = (response) => {
    if (response.status === 200) {
      localStorage.setItem('userId', response.data.user_id);
      localStorage.setItem('userName', response.data.user_name);
      localStorage.setItem('userRole', response.data.user_role);
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
      setLoginLoading(false);
    }
    if ((error.response.status === 500) & (error.response.statusText === 'Internal Server Error')) {
      setError('password', {
        types: {
          failedAuth: 'Incorrect username or password',
        },
      });
      setLoginLoading(false);
    }
  };

  const authenticateCall = (formData) => {
    try {
      axios
        .post(
          `${import.meta.env.VITE_API_ADDRESS}Login?queriedUsername=${
            formData.username
          }&queriedPassword=${formData.password}`,
        )
        .then((response) => handleLogin(response))
        .catch((error) => handleFailedLogin(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateSuccess = (response) => {
    setCreateLoading(false);
    if (response.status === 200) {
      window.location.reload(false);
    }
  };

  const handleCreateFail = (error) => {
    console.log(error);
    setCreateLoading(false);
    if ((error.response.status === 400) & (error.response.statusText === 'Bad Request')) {
      setError('createPassword', {
        types: {
          failedCreate: 'An error occurred, please try again',
        },
      });
    }
    if ((error.response.status === 500) & (error.response.statusText === 'Internal Server Error')) {
      setError('createPassword', {
        types: {
          failedCreate: 'An error occurred, please try again',
        },
      });
    }
    setLoginLoading(false);
  };

  const createUserCall = (formData) => {
    try {
      axios({
        method: 'POST',
        url: `${import.meta.env.VITE_API_ADDRESS}User`,
        headers: {
          'content-type': 'application/json',
        },
        data: {
          user_name: formData.createUsername,
          user_password: formData.createPassword,
          user_role: 'User',
        },
      })
        .then((response) => handleCreateSuccess(response))
        .catch((error) => handleCreateFail(error));
    } catch (error) {
      console.log(error);
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) => {
    setLoginLoading(true);
    await sleep(1500);
    authenticateCall(data);
  };

  const openRegisterForm = (open) => {
    setValue('username', null);
    setValue('password', null);
    setValue('createUsername', null);
    setValue('createPassword', null);
    setRegisterModal(open);
  };

  const onRegister = async (data) => {
    setCreateLoading(true);
    await sleep(2000);
    createUserCall(data);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box sx={style}>
        <div className="grid grid-cols-2">
          <div id="left-side" className="flex col-span-1 content-center">
            <img src={westlanLogo} className="my-auto" />
          </div>
          <div id="right-side" className="col-span-1 ">
            {!registerModal && (
              <form className="grid grid-cols-1 justify-items-center gap-3 mt-[15px]">
                <Typography className="text-center" style={{ fontSize: '25px' }}>
                  Login
                </Typography>
                <Stack>
                  <TextField
                    label="Username"
                    variant="outlined"
                    placeholder="Username"
                    inputProps={{
                      maxLength: 50,
                    }}
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
                <Stack className="mb-[10px]">
                  <TextField
                    label="Password"
                    variant="outlined"
                    placeholder="Password"
                    type="password"
                    inputProps={{
                      maxLength: 50,
                    }}
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
                  {errors.password && errors.password.types && (
                    <p>{errors.password.types.failedAuth}</p>
                  )}
                </Stack>
                <Stack className="flex flex-row mt-[-10px]">
                  <Button
                    variant="outlined"
                    className="my-auto"
                    onClick={() => openRegisterForm(true)}
                  >
                    Create an account
                  </Button>
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
                  {loginLoading ? (
                    <Ring size={40} lineWeight={5} speed={2} color="#82a1b3" />
                  ) : (
                    `Log in`
                  )}
                </Button>
              </form>
            )}
            {registerModal && (
              <form className="grid grid-cols-1 justify-items-center gap-3 mt-[15px]">
                <Typography className="text-center" style={{ fontSize: '25px' }}>
                  Create account
                </Typography>
                <Stack>
                  <TextField
                    label="Username"
                    variant="outlined"
                    placeholder="Username"
                    inputProps={{
                      maxLength: 50,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonCircle />
                        </InputAdornment>
                      ),
                      maxLength: 10,
                    }}
                    {...register('createUsername', { required: true })}
                  />
                  {errors.createUsername?.type === 'required' && (
                    <p className="text-red">Username is required</p>
                  )}
                </Stack>
                <Stack>
                  <TextField
                    label="Password"
                    variant="outlined"
                    placeholder="Password"
                    type="password"
                    inputProps={{
                      maxLength: 50,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyFill />
                        </InputAdornment>
                      ),
                    }}
                    {...register('createPassword', { required: true })}
                  />
                  {errors.createPassword?.type === 'required' && (
                    <p className="text-red">Password is required</p>
                  )}
                  {errors.createPassword && errors.createPassword.types && (
                    <p>{errors.createPassword.types.failedCreate}</p>
                  )}
                </Stack>
                <Stack direction={'row'} className="gap-4">
                  <Button
                    variant="contained"
                    className="mx-auto"
                    disabled={createLoading}
                    onClick={() => openRegisterForm(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    className="mx-auto"
                    sx={{
                      backgroundColor: '#95edad',
                      '&:hover': {
                        backgroundColor: '#80c492',
                      },
                      color: 'white',
                      height: 45,
                    }}
                    disabled={createLoading}
                    onClick={handleSubmit(onRegister)}
                  >
                    {createLoading ? (
                      <Ring size={40} lineWeight={5} speed={2} color="#82a1b3" />
                    ) : (
                      `Create Account`
                    )}
                  </Button>
                </Stack>
              </form>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default LoginModal;
