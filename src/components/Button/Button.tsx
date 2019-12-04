import React from 'react'

type Props = {
    // onClick(): string // Returns a string 
    // onClick(): void // Returns nothing
    // onClick(text: string): void // Returns nothing with params
    // onClick: (text: string) => void // Returns nothing with params
    // onClick: (e: React.MouseEvent) => void // Basic mouse event
    // onChange?: (e: React.FormEvent<HTMLInputElement>) => void // Basic input event
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // Mouse click event
}


// React.FC is a generic
const Button: React.FC<Props> = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>
    // return <button onClick={() => onClick("Hi")}>Click Me</button>
}

export default Button
