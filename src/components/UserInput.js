import React from 'react'

const UserInput = (props) => {
    return (
        <div className="block">
            <input onChange={props.nameChange} type='text' value={props.username}/>
        </div>
    )
}

export default UserInput;