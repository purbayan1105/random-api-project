import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const loadAtom = atom(false);
export const themeAtom = atomWithStorage("themeChange", false);
export const toggleSelectAtom = atomWithStorage("selectToggle", false);
