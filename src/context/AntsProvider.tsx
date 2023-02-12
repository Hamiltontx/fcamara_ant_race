import React, { createContext, useEffect, useState } from "react"

export const AntsContext = createContext<any>({})

export const AntsProvider = ({ children }: { children: JSX.Element }) => {
    const [antPositions, setAntPositions] = useState([]);
    const [race, setRace] = useState(0)
    const [count, setCount] = useState(0);
    const [control, setControl] = useState(false)

    useEffect(() => {
        const total = count + 1
        setCount(total);
        if (total == 5) setControl(false)
    }, [race])

    useEffect(() => {
        if (control) setCount(0)
    }, [control])

    return (
        <AntsContext.Provider value={{ antPositions, control, setAntPositions, setRace, setControl }}>
            {children}
        </AntsContext.Provider>
    );
};

export default AntsProvider