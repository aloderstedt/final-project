import { useContext, createContext, useState } from "react";
// create context to share the current selected game throughout the app
export const Context = createContext(null)

export function GameContextProvider({ children }) {
    const [game, setGame] = useState('game!')

    return <Context.Provider value={[game, setGame]}>{children}</Context.Provider>
}

export function useGameContext() {
    return useContext(Context)
}
