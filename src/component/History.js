import React from 'react'

const History = (props) => {
    return (
        <div className='history'>
            <br />
            <h1>History</h1>
            {
                props.data.length > 0 ?
                    props.data.map((data) => (
                        <p key={data}>{data} : {eval(data)}</p>
                    )) :
                    <p>No Data Available</p>
            }
        </div>
    )
}

export default History
