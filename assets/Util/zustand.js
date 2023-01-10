/* eslint-disable no-unused-vars */
import create from "zustand";
import { persist } from "zustand/middleware";
import Decode from "../../src/decodeBase64";

const useBearStore = create()(
  persist((set, get) => ({
    myUser: '',
    myCompany: '',
    setUser: (user) => set((state) => ({ myUser: user })),
    setCompany: (company) => set((state) => ({ myCompany: company })),
  //  setTeam: (users) => set((state) => ({ myTeam: [users] })),

  }), { name: "global", getStorage: () => localStorage }),
 
);

export default useBearStore;
