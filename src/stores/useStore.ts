import create from "zustand";


const useStore = create((set) => ({
     userId: null,
     username: null,
     highScore: 0,
     setUser: (id,username, highScore) => set(() => ({userId: id, username: username, highScore: highScore})),
}))

export default useStore;