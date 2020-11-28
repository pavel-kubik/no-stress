import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Globe from '../Globe/Globe.jsx';
import FilterCountries from '../FilterCountries/FilterCountries.jsx';
import FilterCategories from '../FilterCategories/FilterCategories.jsx';
import CardList from '../CardList/CardList.jsx';

function Home() {
  const [country, setCountry] = useState('CZ');
  const [category, setCategory] = useState('mustdo');

  return (
    <>
      <div className="filters">
        <FilterCountries setCountry={setCountry} country={country} />
        <FilterCategories setCategory={setCategory} category={category} />
      </div>
      <Globe country={country} />
      <CardList />
    </>
  );
}
export default Home;
