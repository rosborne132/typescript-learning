import React from 'react'

// Proptypes
type Props = {
    title: string // Required
    isActive?: boolean // Optional
}

const Head = ({ title, isActive = true }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            { isActive && <h3>Is Active</h3>}
        </div>
    )
}

export default Head
