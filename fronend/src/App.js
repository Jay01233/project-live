import React, { useState, useEffect } from 'react';
import './App.css';
import AddWebsite from './components/AddWebsite'
import { WebisteList } from './components/WebisteList'
import axios from 'axios';
function App(props) {
  axios.defaults.baseURL = '';

  const [websites, setWebsites] = useState([]);
  const LOCAL_STORAGE_KEY = 'websites'

  useEffect(() => {
    const getWebsites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (getWebsites) setWebsites(getWebsites)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(websites))
  },[websites])

  const callApi = async (url) => {
    const theres = await axios(`http://localhost:5000/getTitle?url=${url}`)
    let url_data = await theres.data
    if(url_data.status === 200) {
      setWebsites([...websites, url_data])
    }
    else {
      return({title: null})
    }
    
  }

  return (
    <div className="ui-container">
      {/* <p>{websites.legth}</p> */}
          <AddWebsite 
            callApi={(url) => callApi(url)}
            websites={websites}
          />
          <WebisteList 
            website={websites}
          />
          
    </div>
  );
}

export default App;
