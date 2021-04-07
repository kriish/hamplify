

import React from "react";

const MyBins = ({ styles }) => {
  const viewStyle = {
    backgroundColor: "#c8e6c9",
  };

  async function createBin() {
    if (!binformData.name || !binformData.capacity || !binformData.fillPercentage) return;
    await API.graphql({ query: createWastebinMutation, variables: { input: binformData } });
    setWastebins([ ...wastebins, binformData ]);
    setBinFormData(initialBinFormState);
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
  }

  return (
    <div class="container">
      <h1 class="title">ADD BINS</h1>

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

      <button class="button is-primary" onClick={createBin}>Create Bin</button>

      </div>
      
  );
};

export default MyBins;




