import React, { useContext, useState, FormEvent } from 'react';
import './SignupLogin.css';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Alert from '@mui/joy/Alert';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { AuthContext, AuthContextType } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignupLogin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  /* const [loggedIn, setLoggedIn] = useState(false)
  const [registered, setRegistered] = useState(false) */
  /* 	const [storedData, setStoredData] = useState([]);
   */
  //To let display success/failure messages after the attempt

  const authContext = useContext<AuthContextType | undefined>(AuthContext);

  if (!authContext) {
    throw new Error('useContext must be used within an AuthProvider');
  }

  const { login, signup, user, logout } = authContext;
  /* const handleLogoutClick =(id:number,token)=>{
    const logoutConfig = {
			method: "delete",
			url: "https://loqui-6bmx.onrender.com/login",
			data: { user_id:id, token:token },
		};
		axios(logoutConfig)
			.then(() => {
				logout()
			})
			.catch((error) => {
				console.log(error);
			});
  } */

  /* The following two functions could be optimized, it's spaghetti code only for now (Amanda)*/

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
      setLoginError(null); // Clear any previous error messages
      setSignupLoginVisible(false); // Close the signup/login window on success
    } catch (error) {
      setLoginError('Wrong username or password.'); // Set error message
      setSignupLoginVisible(true);
    }
  };

  const handleSignUpSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signup({ username: newUsername, password: newPassword });
      setSignupError(null); // Clear any previous error messages
      setSignupLoginVisible(false); // Close the signup/login window on success
      setShowAlert(true); // Show alert
      setTimeout(() => {
        setFadeOut(true);
      }, 2000);

      setTimeout(() => {
        setShowAlert(false);
        setFadeOut(false); // Reset fade-out
      }, 3000);
    } catch (error) {
      setSignupError('Username already exists.'); // Set error message
      setSignupLoginVisible(true);
    }
  };

  const [isSignupLoginVisible, setSignupLoginVisible] = useState(false);
  const toggleSignupLogin = () => {
    setSignupLoginVisible(!isSignupLoginVisible);
  };
  /* const [isUserMenuVisible, setUserMenuVisible] = useState(false);
  const toggleUserMenu = () => {
    setUserMenuVisible(!isUserMenuVisible);
  }; */

  const isPasswordInvalid = (password: string) =>
    password.length > 0 && password.length < 6;

  const isConfirmPasswordInvalid = (
    password: string,
    confirmPassword: string
  ) => confirmPassword.length > 0 && confirmPassword !== password;

  const isSignupFormValid = () => {
    return (
      newUsername.trim() !== '' &&
      newPassword.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      !isPasswordInvalid(newPassword) &&
      !isConfirmPasswordInvalid(newPassword, confirmPassword)
    );
  };
  const isLoginFormValid = () => {
    return username.trim() !== '' && password.trim() !== '';
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 346,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            backgroundColor: '#000000CC',
            borderColor: '#ffffff0f',
          }}
        >
          <h2 className="text-txtdark mb-2">
            Are you sure you want to logout?
          </h2>
          <div className="flex justify-center gap-6 p-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2 border-bordercol border-[1px] text-red-500 rounded-lg hover:opacity-80 hover:bg-bordercol"
            >
              Logout
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-odark border-bordercol border-[1px] text-white rounded-lg hover:bg-bordercol"
            >
              Close
            </button>
          </div>
          <ModalClose variant="plain" sx={{ m: 1 }} />
        </Sheet>
      </Modal>
      {showAlert && (
        <div
          className={`fixed top-1 left-1/2 transform -translate-x-1/2 mt-4 z-50 ${fadeOut ? 'fade-out' : ''}`}
        >
          <Alert
            sx={{
              backgroundColor: '#000000CC',
              border: '#4ade8088 1px solid',
              color: '#FFFFFF',
            }}
          >
            Account created successfully!
          </Alert>
        </div>
      )}
      {user && (
        <div>
          <Dropdown>
            <MenuButton
              sx={{
                backgroundColor: '#00000000', // Change background color
                paddingX: '0',
                paddingY: '0',
                border: 'none', // Change border color
                '&:hover': {
                  backgroundColor: '#1a1a1a00', // Hover background color
                },
              }}
            >
              <div className="flex items-center gap-2 hover:text-white hover:stroke-white lg:stroke-txtbright h-12 lg:text-txtbright fill-txtdark lg:fill-txtbright lg:hover:fill-white text-txtdark">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="current"
                >
                  <path
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    d="M10 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0 .211-.106a4 4 0 0 1 3.578 0L14 7.5m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-2 6.303c5-3 5 3.5 9 1.767-1 4.233-6 4.233-9 1.233-3 3-8 3-9-1.233 4 1.733 4-4.767 9-1.767Z"
                  />
                </svg>
                <p>{user.username}</p>
              </div>
            </MenuButton>
            <Menu
              sx={{
                backgroundColor: '#060606', // Change background color
                border: '1px solid #ffffff0f', // Change border color
                color: '#ffffff', // Change text color
              }}
            >
              <MenuItem
                sx={{
                  color: '#ffffffc0',
                  marginX: '5px',
                  '&:hover': {
                    color: '#ffffff !important',
                    borderRadius: '8px',
                    marginX: '5px',
                    backgroundColor: '#ffffff0f !important',
                  },
                }}
              >
                <Link to="/account">My threads</Link>
              </MenuItem>
              {
                <button onClick={() => setOpen(true)}>
                  <MenuItem
                    sx={{
                      color: '#ffffffc0',
                      marginX: '5px',
                      '&:hover': {
                        color: '#F26969 !important',
                        borderRadius: '8px',
                        marginX: '5px',
                        backgroundColor: '#ffffff0f !important',
                      },
                    }}
                  >
                    Logout
                  </MenuItem>
                </button>
              }
            </Menu>
          </Dropdown>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 lg:hidden absolute bottom-5 right-20 px-6 py-3 border-bordercol border-[1px] fill-red-500 text-red-500 rounded-lg hover:opacity-80 hover:bg-bordercol"
          >
            Logout{' '}
            <svg
              fill="current"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z" />
            </svg>
          </button>
        </div>
      )}
      {!user && (
        <div className="flex">
          <button
            onClick={toggleSignupLogin}
            className="flex items-center gap-2 hover:text-white hover:stroke-white stroke-txtbright h-12  hover:drop-shadow-test"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="current"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                d="M10 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0 .211-.106a4 4 0 0 1 3.578 0L14 7.5m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-2 6.303c5-3 5 3.5 9 1.767-1 4.233-6 4.233-9 1.233-3 3-8 3-9-1.233 4 1.733 4-4.767 9-1.767Z"
              />
            </svg>
            <p className="xl:hidden ">Login / Signup</p>
          </button>

          {isSignupLoginVisible && (
            <div
              onClick={toggleSignupLogin}
              className="fixed inset-0 flex items-top justify-center lg:bg-black bg-opacity-0 lg:bg-opacity-0 z-50 lg:backdrop-blur-md"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-60 mt-[12vh]"
              >
                <div className="p-5 bg-black relative -top-2 lg:bg-odark lg:shadow-test3 backdrop-blur-md border-bordercol lg:border-[1px] w-full md:w-[30vw] lg:w-[20vw] h-full lg:h-auto lg:rounded-lg text-center">
                  <Tabs
                    aria-label="Basic tabs"
                    value={activeTab}
                    onChange={(_, newValue) => {
                      if (typeof newValue === 'number') {
                        setActiveTab(newValue);
                      }
                    }}
                    defaultValue={0}
                    className="rounded-b-lg"
                    sx={{
                      backgroundColor: '#06060600',
                    }}
                  >
                    <TabList tabFlex={1}>
                      <Tab
                        variant="plain"
                        sx={{
                          color: '#8E8E8E',
                          '&.Mui-selected': {
                            color: 'white',
                            background: '#06060600',
                          },
                          '&:not(.Mui-selected):hover': {
                            color: 'white',
                            background: '#06060620',
                          },
                        }}
                      >
                        <b>Login</b>
                      </Tab>
                      <Tab
                        variant="plain"
                        sx={{
                          color: '#8E8E8E',
                          '&.Mui-selected': {
                            color: 'white',
                            background: '#06060600',
                          },
                          '&:not(.Mui-selected):hover': {
                            color: 'white',
                            background: '#06060620',
                          },
                        }}
                      >
                        <b>Sign up</b>
                      </Tab>
                    </TabList>

                    {/* ------------LOGIN FORM------------ */}
                    <TabPanel value={0}>
                      <form
                        name="loginForm"
                        action="https://loqui-6bmx.onrender.com/login"
                        onSubmit={(e) => {
                          handleLoginSubmit(e); // Call handleSubmit to handle form submission
                          toggleSignupLogin(); // Call toggleSignupLogin after form submission
                        }}
                      >
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                          className="text-txtbright bg-transparent border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
                        />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          className="text-txtbright bg-transparent border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
                        />
                        {loginError && (
                          <p className="text-red-500 text-sm mt-4">
                            {loginError}
                          </p>
                        )}
                        <button
                          type="submit"
                          className="flex justify-center items-center mx-auto mt-6 text-txtbright bg-transparent hover:bg-bordercol hover:shadow-test2 border-bordercol border-[1px] rounded-lg w-[90%] h-12 p-4 text-sm disabled:text-txtdark disabled:bg-odark disabled:hover:shadow-none disabled:opacity-50"
                          disabled={!isLoginFormValid()}
                        >
                          Login
                        </button>
                      </form>
                      <p className="mt-6 mb-2 text-txtdark text-sm">
                        Don't have an account?{' '}
                        <span
                          onClick={() => setActiveTab(1)}
                          className="text-txtbright cursor-pointer"
                        >
                          Signup
                        </span>
                      </p>
                      {user && <p className="text-txtbright"></p>}{' '}
                      {/* Display logged-in user */}
                    </TabPanel>
                    {/*-------------- END OF LOGIN FORM -------------*/}

                    {/*----------------- SIGNUP FORM ----------------*/}
                    <TabPanel value={1}>
                      <form
                        name="signUpForm"
                        action="https://loqui-6bmx.onrender.com/signup"
                        onSubmit={(e) => {
                          handleSignUpSubmit(e);
                          toggleSignupLogin();
                        }}
                      >
                        <input
                          type="text"
                          value={newUsername}
                          onChange={(e) => setNewUsername(e.target.value)}
                          placeholder="Username"
                          className="text-txtbright bg-transparent border-bordercol border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm"
                        />
                        {signupError && (
                          <p className="text-red-500 text-sm mb-2">
                            {signupError}
                          </p>
                        )}
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Password"
                          className={`text-txtbright bg-transparent border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm ${
                            isPasswordInvalid(newPassword)
                              ? 'border-red-500'
                              : 'border-bordercol'
                          }`}
                        />
                        {isPasswordInvalid(newPassword) && (
                          <p className="text-red-500 text-sm mt-1">
                            Minimum of at least 6 characters
                          </p>
                        )}
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm password"
                          className={`text-txtbright bg-transparent border-[1px] rounded-full w-[90%] h-12 m-2 p-4 text-sm ${
                            isConfirmPasswordInvalid(
                              newPassword,
                              confirmPassword
                            )
                              ? 'border-red-500'
                              : 'border-bordercol'
                          }`}
                        />
                        {isConfirmPasswordInvalid(
                          newPassword,
                          confirmPassword
                        ) && (
                          <p className="text-red-500 text-sm mt-1">
                            Password does not match
                          </p>
                        )}
                        <button
                          type="submit"
                          className="flex justify-center items-center mx-auto mt-6 text-txtbright bg-transparent hover:bg-bordercol hover:shadow-test2 border-bordercol border-[1px] rounded-lg w-[90%] h-12 p-4 text-sm disabled:text-txtdark disabled:bg-odark disabled:hover:shadow-none disabled:opacity-50"
                          disabled={!isSignupFormValid()}
                        >
                          Signup
                        </button>
                      </form>
                      <p className="mt-6 mb-2 text-txtdark text-sm">
                        Already have an account?{' '}
                        <span
                          onClick={() => setActiveTab(0)}
                          className="text-txtbright cursor-pointer"
                        >
                          Login
                        </span>
                      </p>
                    </TabPanel>
                    {/*-------------- END OF SIGN UP FORM -------------*/}
                  </Tabs>
                  <button /* close button */
                    onClick={toggleSignupLogin}
                    className="lg:absolute lg:top-2 lg:right-3 text-white"
                  >
                    <span className="lg:hidden">Go back</span>{' '}
                    <span className="hidden lg:flex scale-150">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignupLogin;
