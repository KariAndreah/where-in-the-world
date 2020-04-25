import React from 'react';
import './Layout.css';






const card = ({ flag, code, name, nativeName, population, region, subRegion, capital, domain, currencies, languages, showDetailedCard, showDetail, handleToUpdate }) => {

    const changeStates = () => {
        console.log(flag, code, name, nativeName, population, region, subRegion, capital, domain, currencies, languages);
        handleToUpdate(flag, code, name, nativeName, population, region, subRegion, capital, domain, currencies, languages);
        showDetailedCard();
    }



    return (
        <div className='countryCard' onClick={changeStates}>
            <div className='flagImg' style={{ backgroundImage: "url(" + flag + ")" }}></div>
            <div className='info'>
                <div>
                    <h2>{name}</h2>
                    <div className='detail'>
                        <p>Population: </p><p>{population}</p>
                    </div>
                    <div className='detail'>
                        <p>Region: </p><p>{region}</p>
                    </div>
                    <div className='detail'>
                        <p>Capital: </p><p>{capital}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default card;