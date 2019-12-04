import React, { Component } from 'react'

type Props = {
    title: string
}

type State = {
    status: string
}

// interface State {
//     status: string
// }

// Difference between types and interfaces
// Types
// More constrained
// Better intersecting
// Better in error messages
// Can be used in unions

// Interfaces
// Better when Autheoring a library
// Extendable
// Can be augmented

export default class ClassComponent extends Component<Props, State> {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
