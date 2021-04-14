

import React from "react";

const MyBins = ({ styles }) => {
  const viewStyle = {
    backgroundColor: "#c8e6c9",
  };

  
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




