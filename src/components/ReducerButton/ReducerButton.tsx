import React, { useRef, useContext } from 'react'
import useClickOutside from '../Hooks/useClickOutside'
import { GlobalContext } from '../Context/Context'

import styled from 'styled-components'

const ColoredDiv = styled.div`
    background-color: #000;
    color: #fff;
`

const ReducerButton = () => {
    const ref = useRef<HTMLDivElement>(null!)
    
    const { rValue, turnOn, turnOff } = useContext(GlobalContext)
    
    useClickOutside(ref, () => {
        console.log("clicked outside")
    })
    
    console.log(rValue)

    return (
        <div ref={ref}>
            <ColoredDiv>
                { rValue && <h1>Visible</h1> }
                <button onClick={turnOn}>Action One</button>
                <button onClick={turnOff}>Action Two</button>
            </ColoredDiv>
        </div>
    )
}


export default ReducerButton