

import { IChildren } from "../assets/types";
import { UserProvider } from "./user";

export const Contexts = ({ children }: IChildren) => (
  <UserProvider>
    {children}
  </UserProvider>
);