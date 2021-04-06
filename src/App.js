import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes, listWastebins } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { createWastebin as createWastebinMutation } from './graphql/mutations';
// Amplify Datastore vs graphql

const initialFormState = { name: '', description: '' }
const initialBinFormState = { name: '', capacity: 0, fillPercentage: 0 }

function App() {
  const [notes, setNotes] = useState([]);
  const [wastebins, setWastebins] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [binformData, setBinFormData] = useState(initialBinFormState);

  useEffect(() => {
    fetchNotes();
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

  async function createBin() {
    if (!binformData.name || !binformData.capacity || !binformData.fillPercentage) return;
    await API.graphql({ query: createWastebinMutation, variables: { input: binformData } });
    setWastebins([ ...wastebins, binformData ]);
    setBinFormData(initialBinFormState);
  }

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(notesFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }))
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
  }

  return (
    <div className="App">
      <h1>My Octank Waste Service</h1>
      
      <h2>My Bins</h2>
      <p>
      <h1>ADD BINS</h1>

      <input
        onChange={e => setBinFormData({ ...binformData, 'name': e.target.value})}
        placeholder="Bin name"
        value={binformData.name}
      />
      <input
        onChange={e => setBinFormData({ ...binformData, 'capacity': e.target.value})}
        placeholder="Bin capacity"
        value={binformData.capacity}
      />
      <input
        onChange={e => setBinFormData({ ...binformData, 'fillPercentage': e.target.value})}
        placeholder="Bin fillPercentage"
        value={binformData.fillPercentage}
      />

      <button onClick={createBin}>Create Bin</button>

      </p>
      
      <div style={{marginBottom: 30}}>
        <h3>here is bin</h3>
        <p>88%</p>
        {
          wastebins.map(bin => (
            <div key={bin.id}>
              <h3>DYNAMIC BIN: {bin.id}</h3>
              <p>Bin name: {bin.name}</p>
              <p>Capacity: {bin.capacity}</p>
              <p>Fill Percentage: {bin.fillPercentage}%</p>
            </div>
          ))
        }
      </div>

      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
              {
                note.image && <img src={note.image} style={{width: 400}} />
              }
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);