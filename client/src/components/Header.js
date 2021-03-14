import React from 'react'
import HeaderButton from './HeaderButton'

const Header = ({auto}) => {
    return (
        <header className="header-base">
            
            <div className="header-logo">POKEDEX</div>
            
            <div className="headerButtons">
                <HeaderButton className="header-button ml-auto" style={{ marginLeft: auto}}  text="MAIN" />
                <HeaderButton className="header-button" text="COLLECTION" />
                <HeaderButton className="header-button" text="ABOUT" />
            </div>
        </header>
    )
}

export default Header
