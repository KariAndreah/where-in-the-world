import React from 'react';
import Card from './Card';

const CardList = ({ countries, showDetailedCard, showDetail, code, handleToUpdate}) => {
    return (
        <div className='cardFlex'>
            {countries.map((country, i) => {
                return <Card
                    showDetail={showDetail}
                    showDetailedCard={showDetailedCard}
                    key={[i]}
                    flag={countries[i].flag}
                    name={countries[i].name}
                    population={countries[i].population}
                    region={countries[i].region}
                    capital={countries[i].capital}
                    handleToUpdate ={handleToUpdate}
                    code={countries[i].alpha3Code}
                    nativeName={countries[i].nativeName}
                    subRegion = {countries[i].subregion}
                    domain = {countries[i].topLevelDomain[0]}
                    currencies ={countries[i].currencies[0].name}
                    languages={countries[i].languages[0].name}/>
            })}
        </div>
    );
}

export default CardList; 