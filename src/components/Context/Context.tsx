import React, { createContext, useReducer } from 'react'

const initialValues = {
    rValue: true,
    turnOn: () => {},
    turnOff: () => {}
}

export const GlobalContext = createContext(initialValues)

type State = {
    rValue: boolean
}

// Using union types
type Action = {
    type: "one" | "two"
}

function reducer(state: State, action: Action){
    console.log("function triggered")
    switch (action.type) {
        case "one":
            return { rValue: true }
        case "two":
            return { rValue: false }
        default: 
            return state
    }
}

const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues)

    const newValues = {
        rValue: state.rValue,
        turnOn: () => dispatch({ type: "one"}),
        turnOff: () => dispatch({ type: "two"})
    }

    return (
        <GlobalContext.Provider value={newValues}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider
