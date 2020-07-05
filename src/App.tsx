import React, { useState } from 'react';
import './App.css';
import Editor from './Editor'

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <Editor value={value} onChange={(value: any) => setValue(value)} />
      {JSON.stringify(value)}
    </div>
  );
}

export default App;
