import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="block">
            <p className="usercolor">{props.username}</p>
            <p className="agecolor">{props.age}</p>
        </div>
    )
}

export default UserOutput;