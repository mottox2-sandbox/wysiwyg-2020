import React, { useState } from 'react';
import './App.css';
// import Editor from './ReactEditor'
import { Editor }  from './Editor'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      {/* <Editor value={value} onChange={(value: any) => setValue(value)} /> */}
      <Editor />
      {JSON.stringify(value)}
    </div>
  );
}

export default App;
