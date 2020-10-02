import React, {useEffect, useState} from 'react';
import './App.css';
import { Button, Form, Input } from 'reactstrap';
import Recepie from './Recepie';

function App() {
  const API_ID="86335b57";
  const API_KEY="e304813b7e5efd04ead048a5b2f8b195";
  const [recipe, setRecepie] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery]= useState('chicken');

  useEffect( ()=> {
    getRecepie();
  }, [query])

  const getRecepie = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecepie(data.hits);
  }
  const updateSearch = e=> {
    setSearch(e.target.value)
  }
  const getSearch = e=> {
    e.preventDefault();
    setQuery(search);

  }
  return (
    <div className="App">
      <Form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <Button className="search-btn" >Search</Button>
      </Form>
      <div className="main-wrapper">        
        {
          recipe.map( (recipe, index)=> (
            <Recepie 
              key={index} 
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              source={recipe.recipe.source}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
