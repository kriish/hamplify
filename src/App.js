import React, { useState, useEffect } from 'react';
import TopBar from "./components/TopBar";
import MyBins from "./components/MyBins";
//import Footer from "./components/Footer";
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listWastebins } from './graphql/queries';
//import { createWastebin as createWastebinMutation } from './graphql/mutations';

const initialBinFormState = { name: '', capacity: 0, fillPercentage: 0 }

function App() {
  const [wastebins, setWastebins] = useState([]);
  const [binformData, setBinFormData] = useState(initialBinFormState);

  useEffect(() => {
    fetchWastebins();
  }, []);

  async function fetchWastebins() {
    const apiData = await API.graphql({ query: listWastebins });
    const wastebinsFromAPI = apiData.data.listWastebins.items;
    await Promise.all(wastebinsFromAPI.map(async bin => {
      return bin;
    }))
    setWastebins(apiData.data.listWastebins.items);
  }
/*
  async function createBin() {
    if (!binformData.name || !binformData.capacity || !binformData.fillPercentage) return;
    await API.graphql({ query: createWastebinMutation, variables: { input: binformData } });
    setWastebins([ ...wastebins, binformData ]);
    setBinFormData(initialBinFormState);
  }

  // also used for bins
  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
  }
*/
  return (
    <div className="App" style={{
      backgroundColor: "#white",
      minHeight: "100vh",
      position: "relative",
      padding: "100px 0 0 0"
    }}>
      <div class="section">
       <TopBar/>
      
      <div class="container" style={{marginBottom: 30}}>
        <div class="block"><h1 class="is-primary">My bin status</h1></div>
        <div class="block">
        <div class="columns">
        {
          wastebins.map(bin => (
            <div class="column box" key={bin.id}>
              <img class="binImage" src="Delete-Bin-Trash-Transparent.png" height="100" />
              <p>{bin.name}</p>
              <p>Capacity: {bin.capacity} liters</p>
              <p>Fill Percentage: {bin.fillPercentage}%</p>
              <progress class="progress is-primary" value={bin.fillPercentage} max="100">{bin.fillPercentage}%</progress>
              <h3 id="binId">{bin.id}</h3>
            </div>
          ))
        }
        </div>
        </div>             
      </div>

      <AmplifySignOut />
    </div>
    </div>
  );
}

export default withAuthenticator(App);