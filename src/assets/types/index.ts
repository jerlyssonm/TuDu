import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface UserContextData {
  formTask: boolean
  task: boolean
  openCloseForm: (bool: boolean) => void
  openCloseTask: (bool: boolean) => void
}
