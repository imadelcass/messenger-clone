import { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('')
  const [messages, setmessages] = useState(['g','fg'])
  const sendMessages = () => {
    setmessages([...messages, input])
    setinput('')
  }
  return (
    <div className="App">
      <input value={input} onChange={e => setinput(e.currentTarget.value)}/>
      <button onClick={sendMessages}>Send message</button>
      {
        messages.map(msg => {
          return <p>{msg}</p>
          
        })
      }
    </div>
  );
}

export default App;
