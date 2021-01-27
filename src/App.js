import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('')
  const [messager, setmessager] = useState('messager')
  return (
    <div className="App">
      <h1>{messager}</h1>
      <input value={input} onChange={e => setinput(e.currentTarget.value)}/>
      <button onClick={()=>setmessager(input)}>Send message</button>
    </div>
  );
}

export default App;
