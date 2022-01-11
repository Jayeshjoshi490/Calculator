import React from 'react'

const Icon = (props) => {
    return (
        <>
            <button className='icon' onClick={props.methodname}>
                <img src={props.imgsrc} width="16px" height="16px"/>
            </button>
        </>
    )
}

export default Icon
