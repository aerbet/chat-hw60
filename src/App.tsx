import { useState } from 'react'
import ChatBox from "./components/ChatBox/ChatBox.tsx";
import Form from "./components/Form/Form.tsx";
import './App.css'

const App = () => {
  const [messages, setMessages] = useState([])
  const [datetime, setDatetime] = useState(null)


  return (
    <>
      <div className="App">
        <Form />
        <ChatBox messages={messages}/>
      </div>
    </>
  )
}

export default App
