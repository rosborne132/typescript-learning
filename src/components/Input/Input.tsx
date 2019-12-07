import React, { useState, useRef } from 'react'

const  Input = () => {
    // const [name, setName] = useState<string>("")

    // You can set the default type like so.
    const [name, setName] = useState("")

    // !null is read only
    const ref = useRef<HTMLInputElement>(null!)

    return <input ref={ref} value={name} onChange={e => setName(e.target.value)}/>
}

export default Input
