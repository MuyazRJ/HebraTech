import { create } from 'zustand'

interface LoadingState {
    doneLoadingPre: boolean,
    setDoneLoadingPre: (doneLoadingPre: boolean) => void
}

export const PreloaderStates = create<LoadingState>()((set) => ({
    doneLoadingPre: false,
    setDoneLoadingPre: (doneLoadingPre: boolean) => set({ doneLoadingPre })
}))