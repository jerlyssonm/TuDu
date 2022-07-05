import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface UserContextData {
  open: boolean
  openClose: () => void
}
