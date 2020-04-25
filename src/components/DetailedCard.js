import React from 'react';
import './Layout.css';



const DetailedCard = ({ countries, searchfield, showDetail, flag, code, name, nativeName, population, region, subRegion, capital, domain, currencies, languages, removeDetailedCard }) => {

    return (
        <div>
            <div className='buttonContainer'>
                <button className='backButton' onClick={removeDetailedCard}>BACK</button>
            </div>
            <div className='detailedCard'>
                <div className='detailBox'>
                    <div className='detailFlagImg' style={{ backgroundImage: "url(" + flag + ")" }}></div>
                </div>
                <div className='detailBox'>
                    <h1>{name}</h1>
                    <div className='detailInfo'>
                        <div className='detail2'>
                            <p>Native Name: </p><p>{nativeName}</p>
                        </div>
                        <div className='detail2'>
                            <p>Population: </p><p>{population}</p>
                        </div>
                        <div className='detail2'>
                            <p>Region: </p><p>{region}</p>
                        </div>
                        <div className='detail2'>
                            <p>Sub Region: </p><p>{subRegion}</p>
                        </div>
                        <div className='detail2'>
                            <p>Capital: </p><p>{capital}</p>
                        </div>
                        <div className='detail2'>
                            <p>Top Level Domain: </p><p>{domain}</p>
                        </div>
                        <div className='detail2'>
                            <p>Currencies: </p><p>{currencies}</p>
                        </div>
                        <div className='detail2'>
                            <p>Languages: </p><p>{languages}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DetailedCard;