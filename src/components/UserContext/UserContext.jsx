// libraries
import { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [userRole, setUserRole] = useState();
  const [remainLoggedIn, setRemainLoggedIn] = useState();

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId !== null) {
      setUserId(userId);
    }
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
        userId,
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
