import { createContext, useContext, useState } from 'react';
// import { api } from '../../assets/api';
import { IChildren, UserContextData } from "../../assets/types";

export const UserContext = createContext(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  const [formTask, setFormTask]= useState(false)
  const [task, setTask]= useState(false)

  function openCloseForm (bool:boolean){
    if (bool) {
      setFormTask(true)
    }else {
      setFormTask(false)
    }
  }
  function openCloseTask (bool:boolean){
    if (bool) {
      setTask(true)
    }else {
      setTask(false)
    }
  }
  return (
    <UserContext.Provider value={{task, openCloseTask, formTask, openCloseForm}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);