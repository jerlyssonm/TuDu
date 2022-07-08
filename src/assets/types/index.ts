import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}


export interface IUser {
  id: number
  img: string
  name: string
  email: string
  tasks: [ITask]
  subtask: [ISubtask]
}

export interface ITask {
  id: number
  title: string
  description: string
  limit_date: string
  category: string
  completed: boolean
  members?: [IUser]
  subtask?: [ISubtask]
}
export interface ISubtask {
  id: number
  subtask:[string]
}
export interface UserContextData {
  // db: any
  id:number
  formTask: boolean
  task: boolean
  planner: boolean
  profile: boolean
  setId: any
  setDefault: () => void
  openCloseForm: (bool: boolean) => void
  openCloseTask: (bool: boolean) => void
  openClosePlanner: (bool: boolean) => void
  openCloseProfile: (bool: boolean) => void
}
