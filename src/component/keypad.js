import React from 'react'

const Keypad = (props) => {
    return (
        <button id={props.id} name={props.name} onClick={props.handleClick}>{props.name}</button>
    )
}

export default Keypad
