import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <a href="/">
                        <Logo />
                    </a>
                    <div className="degrees-buttons">
                        <button>C</button>
                        <button className="d-b-active">F</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header