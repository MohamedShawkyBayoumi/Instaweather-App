import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = ({ unitsMeasurement, setUnitMeasure, unitMeasure }) => {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <a href="/">
                        <Logo className="logo" />
                    </a>
                    <div className="degrees-buttons">
                        {unitsMeasurement && unitsMeasurement.map(({unit, id}, index) => (
                            <button
                                key={index}
                                className={unitMeasure == id ? 'd-b-active': ''}
                                onClick={() => setUnitMeasure(id)}
                            >
                                {unit}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header