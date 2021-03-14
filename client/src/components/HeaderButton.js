import React from 'react'


const HeaderButton = ({text}) => {
    let forLink = "";
    if (text === "MAIN") {forLink = ''} else {forLink = text}
    return (
        
        <button  className="header-button">
            {text}
        </button>
        
    )
}

export default HeaderButton
