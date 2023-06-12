import { Input } from 'antd';
import { useEffect, useState } from 'react';
import '../styles/addFoodForm.css';

function Search({ searchData }) {
  const [seach, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    searchData(event.target.value);
  };
  return (
    <div className="search">
      <label>Search</label>
      <Input value={seach} type="text" onChange={handleSearch} />
    </div>
  );
}
export default Search;
