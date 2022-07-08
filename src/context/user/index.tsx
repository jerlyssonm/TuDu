import { createContext, useContext, useState } from 'react';
// import { api } from '../../assets/api';
import { IChildren, UserContextData } from "../../assets/types";

export const UserContext = createContext(
  {} as UserContextData
);

export const UserProvider = ({ children }: IChildren) => {
  const [formTask, setFormTask]= useState(false)
  const [task, setTask]= useState(false)
  const [planner, setPlanner]= useState(false)
  const [profile, setProfile]= useState(false)
  const [id, setId] = useState(0)

  function openCloseForm (bool:boolean){
    if (bool) {
      setFormTask(true)
      setProfile(false)
      setPlanner(false)
      setTask(false)
    }else {
      setFormTask(false)
    }
  }
  function openCloseTask (bool:boolean){
    if (bool) {
      setTask(true)
      setProfile(false)
      setFormTask(false)
      setPlanner(false)
    }else {
      setTask(false)
    }
  }
  function openClosePlanner (bool:boolean){
    if (bool) {
      setPlanner(true)
      setTask(false)
      setProfile(false)
      setFormTask(false)
    }else {
      setPlanner(false)
    }
  }
  function openCloseProfile (bool:boolean){
    if (bool) {
      setProfile(true)
      setPlanner(false)
      setTask(false)
      setFormTask(false)
    }else {
      setProfile(false)
    }
  }
  function setDefault () {
    setFormTask(false)
    setProfile(false)
    setPlanner(false)
    setTask(false)
  }
  return (
    <UserContext.Provider value={
      {setDefault,
       planner,
       openClosePlanner,
       profile,
       openCloseProfile,
       task,
       openCloseTask,
       formTask,
       openCloseForm,
       setId,
       id,
       }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);