import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import Scroll from './components/Scroll';
import DetailedCard from './components/DetailedCard';


class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      searchfield: '',
      showDetail: false,
      flag: '',
      code: '',
      name: '',
      nativeName: '',
      population: '',
      region: '',
      subRegion: '',
      capital: '',
      domain: '',
      currencies: [],
      languages: [],
      handleToUpdate: this.handleToUpdate.bind(this)
    }
  }
  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data })
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  showDetailedCard = () => {
    this.setState({ showDetail: true })
  }

  removeDetailedCard = () => {
    this.setState({ showDetail: false })
    this.setState({ searchfield: '' })
  }

  handleToUpdate(flag, code, name, nativeName, population, region, subRegion, capital, domain, currencies, languages) {
    this.setState({
      flag: flag,
      code: code,
      name: name,
      nativeName: nativeName,
      population: population,
      region: region,
      subRegion: subRegion,
      capital: capital,
      domain: domain,
      currencies: currencies,
      languages: languages
    })

  }

  render() {
    const { countries, searchfield, showDetail, flag, code, name, nativeName, population, region, subRegion, capital, domain, currencies, languages } = this.state;
    const filterCountries = countries.filter(countries => {
      return countries.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (showDetail === false) {
      return (!countries.length) ?
        <h1>Loading...</h1> :
        (
          <div>
            <div className='headBanner'>
              <div className='headInfo'>
                <h1>Where In The World?</h1>
              </div>
            </div>
            <div className='searchFlex'>
              <SearchBox searchChange={this.onSearchChange} />
            </div>
            <Scroll>
              <CardList countries={filterCountries}
                showDetail={showDetail}
                showDetailedCard={this.showDetailedCard}
                handleToUpdate={this.handleToUpdate.bind(this)}
                flag={flag}
                code={code}
                name={name}
                nativeName={nativeName}
                population={population}
                region={region}
                subRegion={subRegion}
                capital={capital}
                domain={domain}
                currencies={currencies}
                languages={languages} />
            </Scroll>
          </div>
        )
    } else {
      return (
        <div>
          <div className='headBanner'>
            <div className='headInfo'>
              <h1>Where In The World?</h1>
            </div>
          </div>
          <DetailedCard
            removeDetailedCard={this.removeDetailedCard}
            flag={flag}
            code={code}
            name={name}
            nativeName={nativeName}
            population={population}
            region={region}
            subRegion={subRegion}
            capital={capital}
            domain={domain}
            currencies={currencies}
            languages={languages}
          />
        </div>
      )
    }
  }
}


export default App;
