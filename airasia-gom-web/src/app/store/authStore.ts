import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type User = {
  email: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};

export const authAtom = atomWithStorage<AuthState>("auth", {
  isAuthenticated: false,
  user: null,
});

export const logoutAtom = atom(null, (_, set) => {
  set(authAtom, {
    isAuthenticated: false,
    user: null,
  });
});
