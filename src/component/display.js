import React from 'react'

const display = (props) => {
    return (
        <>
            <form>
                <input type="text" value={props.result} readOnly/>
            </form>
        </>
    )
}

export default display
