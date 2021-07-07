import React, { useState, useEffect } from 'react';
import './App.css';
import AddWebsite from './components/AddWebsite'
import { WebisteList } from './components/WebisteList'
import axios from 'axios';
function App() {
  axios.defaults.baseURL = '';

  const [websites, setWebsites] = useState([]);
  const LOCAL_STORAGE_KEY = 'websites'
  const addWebsiteHandler = (website) => {
    console.log(website)
    setWebsites([...websites, website])
  }

  useEffect(() => {
    const getWebsites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (getWebsites) setWebsites(getWebsites)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(websites))
  },[websites])

  useEffect(()=>{
    websites.map(website => {
      axios.get(website.url)
      .then(res=>{
        console.log(res);
      })
      return null;
    })
  },[websites]);
  const callApi = async () => {
    const theres = await axios('/getTitle')
    const body = await theres.json()

    if(theres.status === 200) {
      console.log('true')
    }
    else throw Error(body.message);
    return body
  }

  return (
    <div className="ui-container">
          <AddWebsite 
            addWebsiteHandler = {addWebsiteHandler}
            callApi={callApi}
          />
          <WebisteList 
            website={websites}
          />
    </div>
  );
}

export default App;
