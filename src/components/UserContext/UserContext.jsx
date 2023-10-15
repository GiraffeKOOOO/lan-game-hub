// libraries
import { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userName, setUserName] = useState();
  const [userRole, setUserRole] = useState();
  const [remainLoggedIn, setRemainLoggedIn] = useState();

  useEffect(() => {
    const userName = window.localStorage.getItem('userName');
    if (userName !== null) {
      setUserName(userName);
    }
    const userRole = window.localStorage.getItem('userRole');
    if (userRole !== null) {
      setUserRole(userRole);
    }
    const remainLoggedIn = window.localStorage.getItem('remainLoggedIn');
    if (remainLoggedIn !== null) {
      setRemainLoggedIn(remainLoggedIn);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userName,
        userRole,
        remainLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
