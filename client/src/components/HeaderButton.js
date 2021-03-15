import React from 'react'
import { Link } from 'react-router-dom'

const HeaderButton = ({text}) => {
    let forLink = "";
    if (text === "MAIN") {forLink = ''} else {forLink = text}
    return (
        <Link to={"/"+`${forLink}`}>
        <button  className="header-button">
            {text}
        </button>
        </Link>
    )
}

export default HeaderButton
