import { createContext, useContext, useState } from 'react';
// import { api } from '../../assets/api';
import { IChildren, UserContextData } from "../../assets/types";

export const UserContext = createContext(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  const [open, setOpen]= useState(false)

  function openClose (){
      setOpen(!open)
  }
  return (
    <UserContext.Provider value={{ open, openClose}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);